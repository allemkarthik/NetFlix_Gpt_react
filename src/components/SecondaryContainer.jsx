import { useSelector } from "react-redux";
import MovieList from "./movieList";

const SecondaryContainer = () => {
  const NowPlayingmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies= useSelector((store)=>store.movies?.popularMovies)
  const topRatedMovies= useSelector((store)=>store.movies?.topRatedMovies)
  if (!NowPlayingmovies || NowPlayingmovies.length === 0 || !popularMovies || !topRatedMovies) return null;
  
  return (
    <div className=" bg-black">
      <div className="-mt-72  relative z-20">
        <MovieList title={"now Playing"} movies={NowPlayingmovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={NowPlayingmovies} />
        <MovieList title={"Horror Movies"} movies={NowPlayingmovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
