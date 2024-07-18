import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieCard({ movie }) {
  const [dogImage, setDogImage] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDogImage = async () => {
      try {
        const response = await axios.get(
          "https://dog.ceo/api/breeds/image/random"
        );
        setDogImage(response.data.message);
      } catch (error) {
        setError("Failed to fetch dog image");
      } finally {
        setLoading(false);
      }
    };

    fetchDogImage();
  }, []);

  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      {loading && <div>Loading image...</div>}
      {error && <div>{error}</div>}
      {dogImage && <img src={dogImage} alt="Random Dog" />}
      <p>{movie.author_name?.join(", ")}</p>
    </div>
  );
}

export default MovieCard;
