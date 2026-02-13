import { useSelector } from "react-redux";
import MovieList from "./movieList";

const SecondaryContainer = () => {
  const NowPlayingmovies = useSelector((store) => store.movies?.nowPlayingMovies);
  const popularMovies= useSelector((store)=>store.movies?.popularMovies)
  const topRatedMovies= useSelector((store)=>store.movies?.topRatedMovies)
  const upComingMovies= useSelector((store)=>store.movies?.upComingMovies)
  if (!NowPlayingmovies || NowPlayingmovies.length === 0 || !popularMovies || !topRatedMovies || !upComingMovies) return null;
  
  return (
    <div className=" bg-black">
      <div className="mt-0 md:-mt-68 pl-2 md:pl-10 relative z-20">
        <MovieList title={"now Playing"} movies={NowPlayingmovies} />
        <MovieList title={"Popular"} movies={popularMovies} />
        <MovieList title={"Top rated Movies"} movies={topRatedMovies} />
        <MovieList title={"Upcoming Movies"} movies={upComingMovies} />
        <MovieList title={"Horror Movies"} movies={NowPlayingmovies} />
      </div>
    </div>
  );
};
export default SecondaryContainer;
