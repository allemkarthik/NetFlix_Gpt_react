import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/movieList";

const GptMovieSuggestion = () => {
  const gpt = useSelector((store) => store.gpt);
  const { movieResults, movieNames } = gpt;
  if (movieNames == null) return null;
  return (
    <div className="my-6 mx-2 bg-black/90 text-white">
      <div className="">
        {movieNames.map((movie,index) => (
          <MovieList key={movie} title={movie} movies={movieResults[index]} />
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
