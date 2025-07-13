import React, { useState } from "react";
import "./App.css";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Invalid input");
      return;
    }

    switch (operator) {
      case "+":
        setResult(a + b);
        break;
      case "-":
        setResult(a - b);
        break;
      case "*":
        setResult(a * b);
        break;
      case "/":
        setResult(b !== 0 ? a / b : "Cannot divide by zero");
        break;
      default:
        break;
    }
  };

  const reset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };

  return (
    <div className="container">
      <h1 className="heading">Basic Calculator</h1>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
        className="input"
      />
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
        className="input"
      />
      <div className="button-group">
        <button onClick={() => handleOperation("+")}>+</button>
        <button onClick={() => handleOperation("-")}>-</button>
        <button onClick={() => handleOperation("*")}>*</button>
        <button onClick={() => handleOperation("/")}>/</button>
        <button onClick={reset} className="reset-btn">
          Reset
        </button>
      </div>
      {result !== null && <p className="result">Result: {result}</p>}
    </div>
  );
}

export default App;
