import React, { useState, useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./Context/MovieContext";

const MovieList = () => {
  const [Movies, setMovies] = useContext(MovieContext);
  return (
    <div>
      {Movies.map((movie) => (
        <center>
          <Movie name={movie.name} price={movie.price} key={movie.id} />
        </center>
      ))}
    </div>
  );
};

export default MovieList;
