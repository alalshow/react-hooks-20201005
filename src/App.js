import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState("blue");
  const [name, setName] = useState("beom");

  function decrementCount() {
    setCount((preveCount) => preveCount - 1);
  }

  function incrementCount() {
    setCount((preveCount) => preveCount + 1);
  }
  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <span>{name}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
