import React, { useState } from "react";
import "./App.css";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={isDarkMode ? "app dark" : "app light"}>
      <h1>Theme Toggle</h1>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}
export default App;
