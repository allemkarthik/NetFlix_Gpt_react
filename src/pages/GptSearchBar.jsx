import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";

import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/store/gptSlice";

const GptSearchBar = () => {
  const dispatch=useDispatch()
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );
    const json = await data.json();
    return json.results;
  };
 const handleGptSearchClick = async () => {
  const input = searchText.current.value;

  const response = await fetch("http://localhost:5000/api/gpt", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query: input }),
  });

  const data = await response.json();

  const gptMovieList = data.result.split(",");

  const tmdbPromises = gptMovieList.map((movie) =>
    searchMovieTMDB(movie.trim())
  );

  const tmdbResults = await Promise.all(tmdbPromises);

  dispatch(addGptMovieResult(tmdbResults));
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
