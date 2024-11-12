import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favoritesList: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action) => {
      state.favoritesList.push(action.payload); //lägg till som favorit
    },
    removeFavorite: (state, action) => {
      state.favoritesList = state.favoritesList.filter(
        //filtrera ut film via id, ta bort från favoritlistan
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
