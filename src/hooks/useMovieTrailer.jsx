import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/store/movieListSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const nowPlayingTrailer=useSelector(store=> store.movies.nowPlayingTrailer)
  const getMovieViodes = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "}/videos?language=en-US",
      API_OPTIONS,
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];

    dispatch(addTrailerVideo(trailer));
  };
  useEffect(() => {
    !nowPlayingTrailer &&  getMovieViodes();
    
  }, []);
};

export default useMovieTrailer;
