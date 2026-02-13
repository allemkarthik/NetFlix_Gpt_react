import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import bgimage from "../assets/Bg-image.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={bgimage} alt="bgimage"></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
