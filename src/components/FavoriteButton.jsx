import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoritesList);

  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFavorite(movie.id));
    } else {
      dispatch(addFavorite(movie));
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      class="add-to-favorites-btn"
      className="add-to-favorites-btn text-lightpurple p-0 border-none bg-transparent hover:cursor-pointer"
      title="Toggle favorite button"
    >
      {isFavorite ? <GoHeartFill size={24} /> : <GoHeart size={24} />}
    </button>
  );
};

export default FavoriteButton;
