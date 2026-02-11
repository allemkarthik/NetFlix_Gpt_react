import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY
});

/**
 * POST /api/gpt-search
 * body: { query: "action movies" }
 */
app.post("/api/gpt-search", async (req, res) => {
  try {
    const { query } = req.body;

    if (!query) {
      return res.status(400).json({ error: "Query is required" });
    }

    const prompt = `
Act as a movie recommendation system.
Suggest 5 movies for the query: "${query}"
Return ONLY comma-separated movie names.
Example: Gadar, Sholay, Don, Golmaal, RRR
`;

    const response = await client.chat.completions.create({
      model: "gpt-5.2",
      messages: [{ role: "user", content: prompt }]
    });

    const result = response.choices[0].message.content;

    res.json({ movies: result });
  } catch (error) {
    console.error("GPT Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
