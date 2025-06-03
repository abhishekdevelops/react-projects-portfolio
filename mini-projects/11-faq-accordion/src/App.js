import React, { useState } from "react";

const faqData = [
  {
    id: 1,
    question: "What is React?",
    answer: "React is a JavaScript library for building user interfaces.",
  },
  {
    id: 2,
    question: "Why use React?",
    answer:
      "React is fast, scalable, and simple. It makes building UIs more intuitive.",
  },
  {
    id: 3,
    question: "What are hooks in React?",
    answer:
      "Hooks are functions that let you use state and lifecycle features in functional components.",
  },
  {
    id: 4,
    question: "What is useState?",
    answer:
      "useState is a React Hook that lets you add state to functional components.",
  },
  {
    id: 5,
    question: "What is useEffect?",
    answer:
      "useEffect lets you perform side effects in function components, like fetching data.",
  },
];

function App() {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        FAQ Accordion
      </h1>

      {faqData.map((faq) => (
        <div
          key={faq.id}
          style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            marginBottom: "15px",
            padding: "15px",
            boxShadow: "0 2px 6px rgba(0, 0, 0, 0.05)",
            backgroundColor: "#fff",
          }}
        >
          <h3
            onClick={() => toggleAnswer(faq.id)}
            style={{
              cursor: "pointer",
              margin: "0",
              fontSize: "18px",
              color: "#333",
            }}
          >
            {faq.question}
          </h3>

          {activeId === faq.id && (
            <p style={{ marginTop: "10px", color: "#555" }}>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
