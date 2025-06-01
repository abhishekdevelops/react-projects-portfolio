import React, { useState } from "react";

function App() {
  const quotes = [
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
  ];

  const [quote, setQuote] = useState(quotes[0]);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <div style={{ textAlign: "center", padding: "50px" }}>
        <h2>Quote Generator</h2>
        <p>"{quote.text}"</p>
        <p>- {quote.author}</p>
        <button onClick={getRandomQuote}>Get New Quote</button>
      </div>
    </>
  );
}
export default App;
