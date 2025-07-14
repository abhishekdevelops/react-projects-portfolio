import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const allQuotes = [
    {
      text: "The best way to get started is to quit talking and begin doing.",
      author: "Walt Disney",
    },
    {
      text: "Don't let yesterday take up too much of today.",
      author: "Will Rogers",
    },
    {
      text: "It's not whether you get knocked down, it's whether you get up.",
      author: "Vince Lombardi",
    },
    {
      text: "Success is not in what you have, but who you are.",
      author: "Bo Bennett",
    },
    {
      text: "Believe you can and you're halfway there.",
      author: "Theodore Roosevelt",
    },
    {
      text: "Your time is limited, so don't waste it living someone else's life.",
      author: "Steve Jobs",
    },
    {
      text: "Hardships often prepare ordinary people for an extraordinary destiny.",
      author: "C.S. Lewis",
    },
  ];

  const shuffleQuotes = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const [shuffledQuotes, setShuffledQuotes] = useState(
    shuffleQuotes(allQuotes)
  );
  const [index, setIndex] = useState(0);

  const getRandomQuote = () => {
    const nextIndex = index + 1;
    if (nextIndex >= shuffledQuotes.length) {
      setShuffledQuotes(shuffleQuotes(allQuotes));
      setIndex(0);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <div className="quote-container">
      <h2 className="title">Quote Generator</h2>
      <div className="quote-box">
        <p className="quote-text">"{shuffledQuotes[index].text}"</p>
        <p className="quote-author">- {shuffledQuotes[index].author}</p>
        <button className="quote-button" onClick={getRandomQuote}>
          Get New Quote
        </button>
      </div>
    </div>
  );
}

export default App;
