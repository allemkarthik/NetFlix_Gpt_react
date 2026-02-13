import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Groq from "groq-sdk";

dotenv.config();

const app = express();

const allowedOrigins = [
  "https://allemkarthik.github.io",
];

app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,POST,PUT,DELETE,OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Credentials", "true");

  // 🔥 IMPORTANT: end preflight here
  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json()); // Parse JSON bodies

// Initialize Groq client
const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

app.post("/api/gpt", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query || query.trim() === "") {
      return res.status(400).json({ error: "Query is required" });
    }

    // GPT completion
    const completion = await groq.chat.completions.create({
      model: "llama-3.1-8b-instant", // Free/fast model
      messages: [
        {
          role: "system",
          content:
            "You are a movie recommendation system. Reply with only movie names, comma separated.",
        },
        {
          role: "user",
          content: query,
        },
      ],
      temperature: 0.7,
      max_tokens: 150,
    });

    // Clean reply
    const reply = (
      completion?.choices?.[0]?.message?.content || "No movies found"
    )
      .split(",")
      .map((m) => m.trim())
      .slice(0, 10) // Optional: limit to first 10 movies
      .join(",");

    res.json({ result: reply });
  } catch (error) {
    console.error("Groq Error:", error);
    const message = error?.message || "Something went wrong";
    res.status(500).json({ error: message });
  }
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
