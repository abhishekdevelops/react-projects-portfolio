import React from "react";
import "../styles/Home.css"; 

const Home = () => {
  return (
    <div className="container">
      <div className="card p-4 shadow-sm">
        <h2 className="mb-3">API Dashboard - Welcome!</h2>
        <p>
          This project is powered by the free and public API from:
          <strong> <a href="https://jsonplaceholder.typicode.com/" target="_blank" rel="noreferrer">JSONPlaceholder</a></strong>
        </p>

        <p>Here are the endpoints we’ll explore:</p>
        <ul>
          <li><strong>Posts:</strong> List of articles from users</li>
          <li><strong>Comments:</strong> Feedback on posts</li>
          <li><strong>Users:</strong> Fake user data with name, email, etc.</li>
          <li><strong>Todos:</strong> Task lists with completed/pending status</li>
        </ul>

        <p>Each page in the menu uses one of these APIs to show real-time data.</p>
      </div>
    </div>
  );
};

export default Home;
