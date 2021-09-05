import React, { useState } from "react";

const Aboutus = ({}) => {
  return (
    <>
      <h1>About page that increment</h1>
      <button onClick={props.increment}>
        I also increment from about page
      </button>
    </>
  );
};

export default Aboutus;
