import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  let colorClass = "black";
  if (count > 0) colorClass = "green";
  else if (count < 0) colorClass = "red";

  return (
    <div className="container">
      <h1>Counter App</h1>
      <h2 className={colorClass}>{count}</h2>
      <button className="btn increment" onClick={() => setCount(count + 1)}>
        Increment
      </button>
      <button
        className="btn decrement"
        onClick={() => setCount(count > 0 ? count - 1 : 0)}
      >
        Decrement
      </button>
      <button className="btn reset" onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  );
}

export default App;
