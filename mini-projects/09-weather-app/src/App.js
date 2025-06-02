import React, { useState } from "react";

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
      if (!res.ok) {
        throw new Error("Failed to fetch weather data");
      }

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
      <h1 style={{ textAlign: "center", marginTop: "30px", color: "#333" }}>
        ☁️ Simple Weather App
      </h1>

      <div
        style={{
          marginTop: "20px",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "10px",
          maxWidth: "320px",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#f0f8ff",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center"
        }}
      >
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name"
          style={{
            padding: "10px",
            width: "200px",
            border: "1px solid #aaa",
            borderRadius: "5px",
            marginBottom: "10px"
          }}
        />
        <br />
        <button
          onClick={getWeather}
          style={{
            padding: "10px 20px",
            color: "white",
            backgroundColor: "#4da6ff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Get Weather
        </button>
      </div>

      {loading && (
        <p style={{ textAlign: "center", marginTop: "20px" }}>Fetching weather...</p>
      )}

      {!loading && weather && (
        <div
          style={{
            textAlign: "center",
            marginTop: "20px",
            padding: "15px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            maxWidth: "320px",
            marginLeft: "auto",
            marginRight: "auto",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
          }}
        >
          <h3>Weather in {weather.nearest_area[0].areaName[0].value}</h3>
          <p>🌡️ Temperature: {weather.current_condition[0].temp_C} °C</p>
          <p>🌤️ Condition: {weather.current_condition[0].weatherDesc[0].value}</p>
        </div>
      )}
    </>
  );
}

export default App;
