import React from "react";
import { useSelector } from "react-redux";
import MoviesList from "../components/MoviesList/MoviesList";

const MovieListContainer = () => {
  const filter = useSelector((state) => state.filter);
  const fiteredMovie = useSelector((state) =>
    state.movies.filter((movie) =>
      movie.movie.toLowerCase().includes(filter.toLowerCase())
    )
  );
  return <MoviesList movies={fiteredMovie} />;
};

export default MovieListContainer;
