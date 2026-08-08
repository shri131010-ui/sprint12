import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minRating: 0,
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setMinRating: (state, action) => {
      state.minRating = action.payload;
    },
  },
});

export const { setMinRating } = filterSlice.actions;

export default filterSlice.reducer;