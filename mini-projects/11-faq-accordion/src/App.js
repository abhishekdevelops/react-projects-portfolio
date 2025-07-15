import React, { useState } from "react";
import "./App.css";

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
    <div className="faq-container">
      <h1 className="faq-title">FAQ Accordion</h1>

      {faqData.map((faq) => (
        <div className="faq-item" key={faq.id}>
          <h3 className="faq-question" onClick={() => toggleAnswer(faq.id)}>
            {faq.question}
          </h3>

          <div className={`faq-answer ${activeId === faq.id ? "show" : ""}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
