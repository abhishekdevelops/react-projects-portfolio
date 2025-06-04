import React, { useEffect, useState } from "react";

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

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    const paddedMinutes = String(minutes).padStart(2, "0");
    const paddedSeconds = String(seconds).padStart(2, "0");

    return `${paddedMinutes}:${paddedSeconds}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Stopwatch</h2>
      <h2>{formatTime(time)}</h2>
      {isRunning && <p>⏱️ Timer is running...</p>}

      <button
        type="button"
        style={{ margin: "0 10px" }}
        onClick={() => setIsRunning(true)}
      >
        Start
      </button>
      <button
        type="button"
        style={{ margin: "0 10px" }}
        onClick={() => setIsRunning(false)}
      >
        Stop
      </button>
      <button
        type="button"
        style={{ margin: "0 10px" }}
        onClick={() => {
          setIsRunning(false);
          setTime(0);
        }}
      >
        Reset
      </button>
    </div>
  );
}
export default Stopwatch;
