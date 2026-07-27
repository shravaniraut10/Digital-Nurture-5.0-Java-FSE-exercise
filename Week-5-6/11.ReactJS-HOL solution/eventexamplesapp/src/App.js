import React, { useState } from "react";
import CurrencyConverter from "./CurrencyConverter";

function App() {
  const [count, setCount] = useState(5);

  const increment = () => {
    setCount(count + 1);
    alert("Hello! Member1");
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const onPress = () => {
    alert("I was clicked");
  };

  return (
    <div style={{ margin: "20px" }}>
      <h3>{count}</h3>

      <button onClick={increment}>Increment</button>
      <br />

      <button onClick={decrement}>Decrement</button>
      <br />

      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>
      <br />

      <button onClick={onPress}>Click on me</button>

      <CurrencyConverter />
    </div>
  );
}

export default App;