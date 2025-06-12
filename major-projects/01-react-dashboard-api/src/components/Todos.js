import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 15))) 
      .catch((err) => console.log("Error fetching todos:", err));
  }, []);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">✅ Todo List</h2>
      {todos.length === 0 ? (
        <p>Loading todos...</p>
      ) : (
        todos.map((todo) => (
          <div
            className={`card mb-2 p-3 ${
              todo.completed ? "bg-success-subtle" : "bg-warning-subtle"
            }`}
            key={todo.id}
          >
            <p className="m-0">
              <strong>Task:</strong> {todo.title}
            </p>
            <p className="m-0">
              <strong>Status:</strong>{" "}
              {todo.completed ? "✅ Completed" : "❌ Pending"}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default Todos;
