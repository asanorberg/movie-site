import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "../features/movies/movieSlice";
import favoritesReducer from "../features/favorites/favoritesSlice";
import watchedReducer from "../features/watched/watchedSlice";

const getFavoritesFromLocalStorage = () => {
  const favorites = localStorage.getItem("favorites");
  return favorites ? JSON.parse(favorites) : [];
};

const saveFavoritesToLocalStorage = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

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
