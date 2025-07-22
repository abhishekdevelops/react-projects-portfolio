import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [transaction, setTransaction] = useState([]);
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("transactions");
    if (stored) {
      setTransaction(JSON.parse(stored));
    }
    setHasLoaded(true);
  }, []);

  useEffect(() => {
    if (hasLoaded) {
      localStorage.setItem("transactions", JSON.stringify(transaction));
    }
  }, [transaction, hasLoaded]);

  const handleSubmit = () => {
    if (!description.trim() || !amount.trim()) return;

    const newtransaction = {
      id: Date.now(),
      description,
      amount: parseFloat(amount),
    };
    setTransaction([...transaction, newtransaction]);
    setAmount("");
    setDescription("");
  };

  const income = transaction
    .filter((t) => t.amount > 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const expense = transaction
    .filter((t) => t.amount < 0)
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income + expense;

  const handleDelete = (idToDelete) => {
    const updatedTransactions = transaction.filter((t) => t.id !== idToDelete);
    setTransaction(updatedTransactions);
  };

  return (
    <div className="app-container">
      <h2 className="title">💰 Expense Tracker</h2>
      <h2 className="balance">Balance: ₹{balance.toFixed(2)}</h2>

      <div className="summary">
        <p className="income">Income: ₹{income.toFixed(2)}</p>
        <p className="expense">Expense: ₹{Math.abs(expense).toFixed(2)}</p>
      </div>

      <input
        type="number"
        value={amount}
        placeholder="Enter the amount"
        onChange={(e) => setAmount(e.target.value)}
        className="input"
      />

      <input
        type="text"
        value={description}
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
        className="input"
      />

      <button onClick={handleSubmit} className="add-btn">
        Add Transaction
      </button>

      <ul>
        {transaction.map((item) => (
          <li key={item.id} className="list-item">
            <span>
              {item.description}: ₹{item.amount}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
