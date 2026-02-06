import { useSelector } from "react-redux";
import MovieList from "./movieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies || movies.length === 0) return null;
  return <MovieList  title={"now Playing"} movies={movies} />;
};
export default SecondaryContainer;
