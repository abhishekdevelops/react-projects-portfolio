import React, { useState } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = () => {
    if (searchTerm.trim() === "") return;

    setLoading(true);
    setError("");
    setMovies([]); // optional: clear previous results

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
    <div style={{ maxWidth: "800px", margin: "30px auto", padding: "20px" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
        🎬 Movie Search App
      </h2>
      <input
        type="text"
        placeholder="Enter movie name"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />

      <button
        onClick={fetchMovies}
        style={{
          width: "100%",
          padding: "10px",
          marginBottom: "20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}
      >
        Search
      </button>

      {loading && <p style={{ textAlign: "center" }}>Loading...</p>}

      {error && (
        <p style={{ color: "red", textAlign: "center", marginBottom: "20px" }}>
          {error}
        </p>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {movies.map((movie) => (
          <div
            key={movie.imdbID}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              textAlign: "center",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3 style={{ fontSize: "16px", margin: "10px 0" }}>
              {movie.Title}
            </h3>
            <p>{movie.Year}</p>
            {movie.Poster !== "N/A" && (
              <img
                src={movie.Poster}
                alt={movie.Title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
