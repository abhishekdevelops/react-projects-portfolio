import React, { useState } from "react";
import "./App.css";

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
    setSubmittedData({ name, email, message });
  };

  return (
    <div className="form-container">
      <h2>Contact Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Enter your message"
          rows={4}
          required
        />
        <div className="button-group">
          <button type="submit">Submit</button>
          <button type="button" onClick={resetForm} className="reset-btn">
            Reset
          </button>
        </div>
      </form>

      {submittedData && (
        <div className="submitted-data">
          <h3>Submitted Data:</h3>
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
    </div>
  );
}

export default App;
