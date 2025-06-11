import React, { useState } from "react";

function App() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
  });
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "40px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "10px",
      }}
    >
      {step === 1 && (
        <>
          <h2>Step 1: Personal Details</h2>
          <input
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <input
            type="number"
            placeholder="Enter your age"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
          />
          <button
            onClick={() => {
              if (!formData.name.trim() || !formData.age.trim()) {
                alert("Please fill out both name and age");
                return;
              }

              setStep(2);
            }}
            style={{
              padding: "10px",
              width: "100%",
              backgroundColor: "#4CAF50",
              color: "#fff",
              border: "none",
            }}
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
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <input
            type="number"
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            style={{
              width: "100%",
              padding: "10px",
              marginBottom: "10px",
            }}
          />

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <button
              onClick={() => setStep(1)}
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#aaa",
                color: "#fff",
                border: "none",
              }}
            >
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
              style={{
                flex: 1,
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
              }}
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
