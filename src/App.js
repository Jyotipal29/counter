import "./styles.css";
import React, { useState } from "react";
export default function App() {
  const [counter, setCounter] = useState(0);
  plusClickHandler = (event) => setCounter(counter + 1);
  minusClickHandler = (event) => setCounter(counter - 1);
  return (
    <div className="App">
      <h3>counter</h3>

      <button className="element" onClick={plusClickHandler}>
        +
      </button>
      <span className="element"> {counter}</span>
      <button className="element" onClick={minusClickHandler}>
        -
      </button>
    </div>
  );
}
