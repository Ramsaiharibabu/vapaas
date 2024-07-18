import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <SearchBar
        setMovies={setMovies}
        setLoading={setLoading}
        setError={setError}
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
