import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GoHeart, GoHeartFill } from "react-icons/go";
import {
  addFavorite,
  removeFavorite,
} from "../features/favorites/favoritesSlice";

const FavoriteButton = ({ movie }) => {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favoritesList); //Läs in favorites list

  const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id); //Kontrollera om filmen redan finns i listan

  const handleToggleFavorite = () => {
    //Toggla Favorit
    if (isFavorite) {
      dispatch(removeFavorite(movie.id)); //Om filmen finns i listan, ta bort
    } else {
      dispatch(addFavorite(movie)); //Om filmen inte finns i listan, lägg till
    }
  };

  return (
    <button
      onClick={handleToggleFavorite}
      className={`add-to-favorites-btn text-lightpurple p-0 border-none bg-transparent hover:cursor-pointer ${
        isFavorite ? "favorite-active" : ""
      }`}
      title="Toggle favorite button"
    >
      {isFavorite ? <GoHeartFill size={24} /> : <GoHeart size={24} />}
    </button>
  );
};

export default FavoriteButton;
