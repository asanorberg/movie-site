import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.favoritesList);

  return (
    <div className="flex flex-col">
      <h2 className="flex text-white">My Favorites</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-darkerpurple py-10">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
