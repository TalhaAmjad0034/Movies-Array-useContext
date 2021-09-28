import React, { useContext } from "react";

import "./Nav.css";
import { MovieContext } from "./Context/MovieContext";

const Nav = () => {
  const [Movies, setMovies] = useContext(MovieContext);

  return (
    <div className="Nav">
      <h1>Theater</h1>
      <p>List of Movies: {Movies.length} </p>
    </div>
  );
};

export default Nav;
