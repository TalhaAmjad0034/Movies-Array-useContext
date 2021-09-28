import React, { useState } from "react";
import { useContext } from "react/cjs/react.development";
import { MovieContext } from "./Context/MovieContext";

const AddMovie = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [movies, setMovies] = useContext(MovieContext);

  const updateName = (e) => {
    setName(e.target.value);
  };
  const updatePrice = (e) => {
    setPrice(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setMovies((prevMovies) => [
      ...prevMovies,
      { name: name, price: `$${price}` },
    ]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <center>
        <form>
          <input type="text" name="name" value={name} onChange={updateName} />
          <input
            type="text"
            name="price"
            value={price}
            onChange={updatePrice}
          />
          <button onClick={submitHandler}>Submit</button>
        </form>
      </center>
    </>
  );
};

export default AddMovie;
