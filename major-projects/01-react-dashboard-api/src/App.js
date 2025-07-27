import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Posts from "./components/Posts";
import Comments from "./components/Comments";
import Users from "./components/Users";
import Todos from "./components/Todos";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route path="/dashboard" element={<Dashboard />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="posts" element={<Posts />} />
        <Route path="comments" element={<Comments />} />
        <Route path="users" element={<Users />} />
        <Route path="todos" element={<Todos />} />
      </Route>
    </Routes>
  );
}

export default App;
