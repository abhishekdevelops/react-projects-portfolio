import React, { useState } from "react";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });

  return (
    <div className="form-container">
      {step === 1 && (
        <>
          <h2>Step 1: Personal Details</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="input"
          />
          <input
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            className="input"
          />
          <button
            onClick={() => {
              if (!formData.name.trim() || !formData.age.trim()) {
                alert("Please fill out both name and age");
                return;
              }
              setStep(2);
            }}
            className="btn next-btn"
          >
            Next
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <h2>Step 2: Contact Details</h2>
          <input
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="input"
          />
          <input
            type="number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="input"
          />

          <div className="btn-group">
            <button onClick={() => setStep(1)} className="btn back-btn">
              Back
            </button>
            <button
              onClick={() => {
                if (!formData.email.trim() || !formData.phone.trim()) {
                  alert("Please enter both email and phone number");
                  return;
                }
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(formData.email.trim())) {
                  alert("Please enter a valid email address.");
                  return;
                }

                alert("Form submitted successfully!");
                console.log("Submitted Data:", formData);
              }}
              className="btn submit-btn"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
