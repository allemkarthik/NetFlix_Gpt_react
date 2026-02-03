import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";

const VideoBackground = ({ movieId }) => {
  
  const [trailerKey , setTrailerkey]=useState(null)

  const getMovieViodes = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "}/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();
    // console.log(json);

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    // console.log(trailer);
    const key = trailer.key;
    setTrailerkey(key)
  };
  useEffect(() => {
    getMovieViodes();
  }, []);

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={"https://www.youtube.com/embed/"+trailerKey}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
