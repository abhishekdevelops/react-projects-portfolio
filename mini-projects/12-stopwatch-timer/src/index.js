import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Stopwatch from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Stopwatch/>
  </React.StrictMode>
);
