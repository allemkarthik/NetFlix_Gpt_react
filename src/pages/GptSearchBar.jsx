import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addGptMovieResult } from "../utils/store/gptSlice";
import lang from "../utils/languageConstants";
import { API_OPTIONS } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // Fetch TMDB for each movie
  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`,
      API_OPTIONS,
    );
    const json = await response.json();
    return json.results;
  };

  // GPT search click handler
  const handleGptSearchClick = async () => {
    const input = searchText.current.value.trim();
    if (!input) return;

    try {
      const response = await fetch("http://localhost:5000/api/gpt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query: input }),
      });

      const data = await response.json();

      if (!data.result) {
        console.error("GPT returned empty response:", data);
        return;
      }

      // Split, trim and fetch TMDB results
      const gptMovieList = data.result.split(",").map((m) => m.trim());
      const tmdbPromises = gptMovieList.map((movie) => searchMovieTMDB(movie));
      const tmdbResults = await Promise.all(tmdbPromises);

      // Save to redux
      dispatch(addGptMovieResult({movieNames:gptMovieList, movieResults:tmdbResults}));
    } catch (error) {
      console.error("GPT search error:", error);
    }
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9"
          placeholder={lang[langKey].gptSearchPlaceHolder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
