import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "$10",
      id: 234532,
    },
    {
      name: "Super Man",
      price: "$15",
      id: 233243,
    },
    {
      name: "The Hulk",
      price: "$20",
      id: 54353,
    },
  ]);
  return (
    <MovieContext.Provider value={[movies, setMovies]}>
      {props.children}
    </MovieContext.Provider>
  );
};
