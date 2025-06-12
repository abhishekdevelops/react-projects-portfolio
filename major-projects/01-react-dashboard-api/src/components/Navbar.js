import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../styles/Navbar.css"; 

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row gap-4">
        <li className="nav-item">
          <NavLink to="/dashboard/home" className="nav-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/posts" className="nav-link">Posts</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/comments" className="nav-link">Comments</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/users" className="nav-link">Users</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/dashboard/todos" className="nav-link">Todo List</NavLink>
        </li>
        <li className="nav-item">
          <button className="btn btn-danger btn-sm" onClick={handleLogout}>
            Logout
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
