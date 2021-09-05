import React from "react";

const Error = (props) => {
  return (
    <div>
      <h2>Error page that decrement</h2>
      <button onClick={props.Decrement}>I decrement form error.js page</button>
    </div>
  );
};

export default Error;
