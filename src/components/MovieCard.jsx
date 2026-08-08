"use client";

import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../store/favoritesSlice";

export default function MovieCard({ movie }) {
  const dispatch = useDispatch();

  const favorites = useSelector((state) => state.favorites.favorites);

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Image";

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />

      <div className="movie-info">
        <h3>{movie.title}</h3>

        <p>Rating: {movie.vote_average}</p>

        <button
          className="favorite-btn"
          onClick={handleFavorite}
          aria-label={
            isFavorite ? "Remove from favorites" : "Add to favorites"
          }
        >
          {isFavorite ? "❤️" : "🤍"}
        </button>
      </div>
    </div>
  );
}