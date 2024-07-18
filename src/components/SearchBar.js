import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import debounce from "lodash.debounce";

function SearchBar({ setMovies, setLoading, setError }) {
  const [query, setQuery] = useState("");

  const searchMovies = async (searchQuery) => {
    if (!searchQuery.trim()) {
      setMovies([]);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await axios.get(
        `https://openlibrary.org/search.json?q=${encodeURIComponent(
          searchQuery
        )}`
      );
      setMovies(response.data.docs);
    } catch (error) {
      setError("Failed to fetch movies");
    } finally {
      setLoading(false);
    }
  };

  const debouncedSearchMovies = useCallback(debounce(searchMovies, 300), []);

  useEffect(() => {
    debouncedSearchMovies(query);
    return () => {
      debouncedSearchMovies.cancel();
    };
  }, [query, debouncedSearchMovies]);

  const handleSearchClick = () => {
    searchMovies(query);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for movies"
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
}

export default SearchBar;
