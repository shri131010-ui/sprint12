"use client";

import { useDispatch, useSelector } from "react-redux";
import { setMinRating } from "../store/filterSlice";

export default function RatingFilter() {
  const dispatch = useDispatch();

  const minRating = useSelector((state) => state.filter.minRating);

  return (
    <div style={{ margin: "20px 0" }}>
      <label>
        ⭐ Minimum Rating: <strong>{minRating}</strong>
      </label>

      <input
        type="range"
        min="0"
        max="10"
        step="1"
        value={minRating}
        onChange={(e) => dispatch(setMinRating(Number(e.target.value)))}
      />
    </div>
  );
}