
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import RatingFilter from "../components/RatingFilter";
import filterReducer from "../store/filterSlice";

function renderWithStore() {
  const store = configureStore({
    reducer: {
      filter: filterReducer,
    },
    preloadedState: {
      filter: {
        minRating: 5,
      },
    },
  });

  render(
    <Provider store={store}>
      <RatingFilter />
    </Provider>
  );

  return store;
}

describe("RatingFilter", () => {
  test("renders current minimum rating", () => {
    renderWithStore();

    expect(screen.getByText(/Minimum Rating/i)).toBeInTheDocument();
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("updates rating when slider changes", () => {
    const store = renderWithStore();

    const slider = screen.getByRole("slider");

    fireEvent.change(slider, {
      target: { value: "8" },
    });

    expect(store.getState().filter.minRating).toBe(8);
  });
});