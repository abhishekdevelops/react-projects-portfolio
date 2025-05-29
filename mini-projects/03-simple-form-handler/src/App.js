import React, { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [submittedData, setSubmittedData] = useState(null);

  const resetForm = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmittedData(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmittedData({
      name,
      email,
      message,
    });
  };

  return (
    <>
      <h2 style={{ textAlign: "center", marginTop: "30px", color: "red" }}>
        Contact Form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "300px",
          margin: "20px auto",
          gap: "10px",
        }}
      >
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter you email"
        />
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={4}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>

      {submittedData && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <h3 style={{ color: "blue" }}>Submitted Data:</h3>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
    </>
  );
}
export default App;
