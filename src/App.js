import React, { useState } from "react";
import Aboutus from "./Components/Aboutus";
import Error from "./Components/Error";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h2>I am from App.js</h2>
      <h1>{counter}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <Aboutus increment={increment} />
      <Error Decrement={decrement} />
    </div>
  );

  // (
  //   <div className="App">
  //     <Aboutus />

  //     <Error />
  //   </div>
  // );
}

export default App;
