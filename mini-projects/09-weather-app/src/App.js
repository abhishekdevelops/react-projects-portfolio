import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const getWeather = async () => {
    if (!city) {
      alert("Please enter a city name");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(`https://wttr.in/${city}?format=j1`);
      if (!res.ok) throw new Error("Failed to fetch weather data");

      const data = await res.json();
      setWeather(data);
    } catch (err) {
      alert("Something went wrong. Try another city.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="title">☁️ Simple Weather App</h1>

      <div className="card input-card">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          className="input"
        />
        <button onClick={getWeather} className="button">
          Get Weather
        </button>
      </div>

      {loading && <p className="loading-text">Fetching weather...</p>}

      {!loading && weather && (
        <div className="card weather-card">
          <h3>Weather in {weather.nearest_area[0].areaName[0].value}</h3>
          <p>🌡️ Temperature: {weather.current_condition[0].temp_C} °C</p>
          <p>
            🌤️ Condition: {weather.current_condition[0].weatherDesc[0].value}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
