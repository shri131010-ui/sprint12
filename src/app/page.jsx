"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import RatingFilter from "../components/RatingFilter";
import { fetchMovies } from "../services/tmdb";
import { toggleTheme } from "../store/themeSlice";

export default function Home() {
  const dispatch = useDispatch();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const favorites = useSelector((state) => state.favorites.favorites);
  const minRating = useSelector((state) => state.filter.minRating);
  const darkMode = useSelector((state) => state.theme.darkMode);

  const loadMovies = useCallback(async (searchQuery) => {
    setLoading(true);
    const results = await fetchMovies(searchQuery);
    setMovies(results);
    setLoading(false);
  }, []);

  useEffect(() => {
    loadMovies("");
  }, [loadMovies]);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => movie.vote_average >= minRating);
  }, [movies, minRating]);

  return (
    <main className={`container ${darkMode ? "dark-theme" : "light-theme"}`}>
      
      <header className="top-bar">
        <h1 className="logo">NETFLIX</h1>

        <div className="search-box">
          <SearchBar onSearch={loadMovies} />
        </div>

        <div className="right-menu">
          <div className="favorite-count">
            ❤️ {favorites.length}
          </div>

          <button
            className="theme-btn"
            onClick={() => dispatch(toggleTheme())}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
        </div>
      </header>

      <div className="filter-section">
        <RatingFilter />
      </div>

      <section>
        {loading ? (
          <h2>Loading Movies...</h2>
        ) : (
          <MovieGrid movies={filteredMovies} />
        )}
      </section>

    </main>
  );
}