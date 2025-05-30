import React, { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "50px",
        }}
      >
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          style={{ padding: "10px", width: "200px", marginBottom: "10px" }}
        />

        <button
          style={{
            color: "white",
            background: "black",
            padding: "8px 16px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
    </>
  );
}
export default App;
