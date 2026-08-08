import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import MovieCard from "../components/MovieCard";
import favoritesReducer from "../store/favoritesSlice";

function renderWithRedux(component) {
  const store = configureStore({
    reducer: {
      favorites: favoritesReducer,
    },
  });

  return render(<Provider store={store}>{component}</Provider>);
}

describe("MovieCard Component", () => {
  const movie = {
    id: 1,
    title: "Avatar",
    vote_average: 8.5,
    poster_path: "/avatar.jpg",
  };

  test("renders movie title", () => {
    renderWithRedux(<MovieCard movie={movie} />);
    expect(screen.getByText("Avatar")).toBeInTheDocument();
  });

  test("renders movie rating", () => {
    renderWithRedux(<MovieCard movie={movie} />);
    expect(screen.getByText("Rating: 8.5")).toBeInTheDocument();
  });

  test("renders favorite button", () => {
    renderWithRedux(<MovieCard movie={movie} />);
    expect(
      screen.getByRole("button", {
        name: /add to favorites/i,
      })
    ).toBeInTheDocument();
  });
});