import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");

  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(Number(num1) + Number(num2));
  };
  const handleSubtraction = () => {
    setResult(Number(num1) - Number(num2));
  };
  const handleMultiplication = () => {
    setResult(Number(num1) * Number(num2));
  };
  const handleDivision = () => {
    if (Number(num2) !== 0) {
      setResult(Number(num1) / Number(num2));
    } else {
      setResult("Cannot Divide by zero");
    }
  };

  const handleReset = () => {
    setNum1("");
    setNum2("");
    setResult(null);
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          gap: "10px",
        }}
      >
        <h2 style={{ textAlign: "center", marginTop: "20px" }}>
          Basic Calculator
        </h2>
        <input
          type="number"
          style={{
            padding: "10px",
            width: "200px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          id="num1"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input
          type="number"
          style={{
            padding: "10px",
            width: "200px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
          id="num2"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleAddition}
        >
          +
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleSubtraction}
        >
          -
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleMultiplication}
        >
          *
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleDivision}
        >
          /
        </button>

        <button
          style={{
            padding: "10px 20px",
            margin: "5px",
            background: "#333",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={handleReset}
        >
          Reset
        </button>

        {result !== null && (
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#007BFF" }}>
            <strong>Result:{result}</strong>
          </p>
        )}
      </div>
    </>
  );
}
export default App;
