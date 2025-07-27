import React, { useState } from "react";
import "./App.css";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);
    setError("");
    setMovies([]);

    fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=a42ce400`)
      .then((res) => res.json())
      .then((data) => {
        if (data.Response === "True") {
          setMovies(data.Search);
        } else {
          setError(data.Error || "No movies found");
        }
      })
      .catch(() => {
        setError("Something went wrong while fetching data.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="app-container">
      <h2 className="title">🎬 Movie Search App</h2>

      <input
        type="text"
        placeholder="Enter movie name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-input"
      />

      <button onClick={fetchMovies} className="search-btn">
        Search
      </button>

      {loading && <p className="loading-text">Loading...</p>}

      {error && <p className="error-text">{error}</p>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <h3>{movie.Title}</h3>
            <p>{movie.Year}</p>
            {movie.Poster !== "N/A" && (
              <img src={movie.Poster} alt={movie.Title} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
