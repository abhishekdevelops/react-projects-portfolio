import React, { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "20px",
        }}
      >
        <h2 style={{ color: "red", marginBottom: "20px" }}>
          Live Character Counter
        </h2>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={4}
          style={{ width: "300px", padding: "10px", marginBottom: "15px" }}
        />
        <p style={{ color: "blue", fontWeight: "bold" }}>
          Character Count: {message.length}
        </p>
      </div>
    </>
  );
}

export default App;
