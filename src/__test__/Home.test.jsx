import { render, screen, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import Home from "../app/page";

import favoritesReducer from "../store/favoritesSlice";
import filterReducer from "../store/filterSlice";
import themeReducer from "../store/themeSlice";

import { fetchMovies } from "../services/tmdb";

jest.mock("../services/tmdb", () => ({
  fetchMovies: jest.fn(),
}));

describe("Home API Mocking", () => {
  test("loads movies from mocked API", async () => {
    fetchMovies.mockResolvedValue([
      {
        id: 1,
        title: "Batman",
        vote_average: 8,
        poster_path: "/test.jpg",
      },
    ]);

    const store = configureStore({
      reducer: {
        favorites: favoritesReducer,
        filter: filterReducer,
        theme: themeReducer,
      },
    });

    render(
      <Provider store={store}>
        <Home />
      </Provider>
    );

    expect(screen.getByText(/Loading Movies/i)).toBeInTheDocument();

    await waitFor(() => {
      expect(fetchMovies).toHaveBeenCalled();
    });
  });
});