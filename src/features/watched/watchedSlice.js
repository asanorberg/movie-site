import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  watchedList: JSON.parse(localStorage.getItem("watchedMovies")) || [], //Ladda watched movies från localstorage
};

const watchedSlice = createSlice({
  name: "watched",
  initialState,
  reducers: {
    markAsWatched: (state, action) => {
      const movieId = action.payload;
      if (!state.watchedList.includes(movieId)) {
        state.watchedList.push(movieId); //Lägg till filmen som watched
        localStorage.setItem(
          "watchedMovies",
          JSON.stringify(state.watchedList) //Spara till localstorage
        );
      }
    },
    unmarkAsWatched: (state, action) => {
      const movieId = action.payload;
      state.watchedList = state.watchedList.filter((id) => id !== movieId); //Ta bort från watched
      localStorage.setItem("watchedMovies", JSON.stringify(state.watchedList)); //Uppdatera localstorage
    },
  },
});

export const { markAsWatched, unmarkAsWatched } = watchedSlice.actions;
export default watchedSlice.reducer;
