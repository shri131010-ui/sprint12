import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import filterReducer from "./filterSlice";
import themeReducer from "./themeSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    filter: filterReducer,
    theme: themeReducer,
  },
});