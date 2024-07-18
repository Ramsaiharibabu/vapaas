import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.key} movie={movie} />
      ))}
    </div>
  );
}

export default MovieList;
