import React, { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  return (
    <div className="container">
      <h1 className="heading">Live Character Counter</h1>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your message..."
        className="textarea"
        rows={6}
      />
      <p className="count">Character Count: {text.length}</p>
    </div>
  );
}

export default App;
