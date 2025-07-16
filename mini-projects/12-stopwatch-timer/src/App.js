import React, { useEffect, useState } from "react";
import "./App.css";

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  return (
    <div className="stopwatch-container">
      <h2 className="stopwatch-title">Stopwatch</h2>
      <h1 className="stopwatch-time">{formatTime(time)}</h1>
      {isRunning && <p className="status-text">⏱️ Timer is running...</p>}

      <div className="button-group">
        <button className="btn start" onClick={() => setIsRunning(true)}>
          Start
        </button>
        <button className="btn stop" onClick={() => setIsRunning(false)}>
          Stop
        </button>
        <button
          className="btn reset"
          onClick={() => {
            setIsRunning(false);
            setTime(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Stopwatch;
