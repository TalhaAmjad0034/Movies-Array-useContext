import React from "react";
import AddMovie from "./Components/AddMovie";
import { MovieProvider } from "./Components/Context/MovieContext";
import MovieList from "./Components/MovieList";
import Nav from "./Components/Nav";

const App = () => {
  return (
    <MovieProvider>
      <Nav />
      <AddMovie />
      <MovieList />
    </MovieProvider>
  );
};

export default App;
