import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h1 className="heading">Todo App</h1>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
        />
        <button onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button className="delete" onClick={() => deleteTodo(todo.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
