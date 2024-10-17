import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import watchedReducer from "../features/watched/watchedSlice"; // Import the watched slice

// Funktion för att hämta favoriter från Local Storage
const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

// Funktion för att spara favoriter i Local Storage
const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Reducers
const store = configureStore({
  reducer: {
    movies: movieReducer,
    favorites: favoritesReducer,
    watched: watchedReducer,
  },
  preloadedState: {
    favorites: {
      favoritesList: getFavoritesFromLocalStorage(),
    },
  },
});

store.subscribe(() => {
  const state = store.getState();
  saveFavoritesToLocalStorage(state.favorites.favoritesList);
});

export default store;
