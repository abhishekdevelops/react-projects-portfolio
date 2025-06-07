import React, { useEffect, useState } from "react";

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
    <div
      style={{
        maxWidth: "500px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        💰 Expense Tracker
      </h2>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        Balance: ₹{balance.toFixed(2)}
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
        }}
      >
        <p style={{ color: "green" }}>Income: ₹{income.toFixed(2)}</p>
        <p style={{ color: "red" }}>Expense: ₹{Math.abs(expense).toFixed(2)}</p>
      </div>
      <input
        type="number"
        value={amount}
        placeholder="Enter the amount"
        onChange={(e) => setAmount(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <input
        type="text"
        value={description}
        placeholder="Enter the description"
        onChange={(e) => setDescription(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      <button
        onClick={handleSubmit}
        style={{
          padding: "10px",
          width: "100%",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Add Transaction
      </button>

      <ul>
        {transaction.map((item) => (
          <li
            key={item.id}
            style={{
              backgroundColor: "#fff",
              marginBottom: "10px",
              padding: "10px 15px",
              borderRadius: "5px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              {item.description}: ₹{item.amount}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                borderRadius: "4px",
                padding: "5px 10px",
                cursor: "pointer",
              }}
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
