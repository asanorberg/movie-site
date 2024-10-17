import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedList: JSON.parse(localStorage.getItem("watchedMovies")) || [],
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    markAsWatched: (state, action) => {
      const movieId = action.payload;
      if (!state.watchedList.includes(movieId)) {
        state.watchedList.push(movieId);
        localStorage.setItem(
          "watchedMovies",
          JSON.stringify(state.watchedList)
        );
      }
    },
    unmarkAsWatched: (state, action) => {
      const movieId = action.payload;
      state.watchedList = state.watchedList.filter((id) => id !== movieId);
      localStorage.setItem("watchedMovies", JSON.stringify(state.watchedList));
    },
  },
});

export const { markAsWatched, unmarkAsWatched } = watchedSlice.actions;
export default watchedSlice.reducer;
