import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Posts from "./Posts";
import Comments from "./Comments";
import Users from "./Users";
import Todos from "./Todos";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="home" element={<Home />} />
          <Route path="posts" element={<Posts />} />
          <Route path="comments" element={<Comments />} />
          <Route path="users" element={<Users />} />
          <Route path="todos" element={<Todos />} />
        </Routes>
      </div>
    </>
  );
};

export default Dashboard;
