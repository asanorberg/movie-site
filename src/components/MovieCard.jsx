import React from "react";
import { Link } from "react-router-dom";
import { GoStarFill, GoCalendar, GoUnmute, GoCheck } from "react-icons/go";
import FavoriteButton from "./FavoriteButton";
import { useDispatch, useSelector } from "react-redux";
import {
  markAsWatched,
  unmarkAsWatched,
} from "../features/watched/watchedSlice";
import noPosterImage from "../assets/moviesite_logo.png";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  const posterUrl = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : noPosterImage;

  const dispatch = useDispatch();
  const watchedList = useSelector((state) => state.watched.watchedList); // Hämtar listan av watched filmer

  const handleToggleWatched = () => {
    if (watchedList.includes(movie.id)) {
      dispatch(unmarkAsWatched(movie.id)); // Om filmen redan är markerad som watched, dispatch action för att ta bort den från listan
    } else {
      dispatch(markAsWatched(movie.id)); //Else, dispatch action för att markera som watched
    }
  };

  const isWatched = watchedList.includes(movie.id);

  return (
    <div className="movie-card bg-darkpurple text-white w-[300px] h-fit rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link className="no-underline" to={`/movie/${movie.id}`}>
        <img
          src={posterUrl}
          alt={movie.title}
          className={`w-full object-cover rounded-t-lg pb-0 ${
            !movie.poster_path ? "fallback-image" : ""
          }`}
        />
      </Link>
      <div className="flex flex-col text-left p-4 mt-0">
        <div className="flex justify-between">
          <h2 className="text-white font-thin text-[18px] mb-2 mt-0">
            {movie.title}
          </h2>
          <FavoriteButton movie={movie} /> {/* Lägg till som favorit knapp  */}
        </div>
        <span className="flex text-md text-darkyellow">
          <div className="flex mr-1">
            <GoStarFill />
          </div>
          {movie.vote_average.toFixed(1)}
        </span>
        <div className="mt-4 flex flex-col text-sm tracking-wide">
          <span>
            <p className="flex items-center text-white gap-2 m-0">
              <GoCalendar className="text-darkyellow" />
              {movie.release_date
                ? movie.release_date.split("-")[0]
                : "Unknown"}
            </p>
          </span>
          <span>
            <p className="flex items-center text-white gap-2 m-0">
              <GoUnmute className="text-darkyellow" />
              {movie.original_language.toUpperCase()}
            </p>
          </span>
        </div>
        <div className="flex flex-row-reverse">
          {" "}
          {/* Toggla watched knapp  */}
          <button
            title="Toggle watched button"
            onClick={handleToggleWatched}
            className={`whitespace-nowrap cursor-pointer text-lg flex flex-col items-center px-4 py-1 rounded-full w-2   ${
              isWatched
                ? "bg-transparent text-lightblue border-solid border-lightblue border-[0.5px]"
                : "bg-transparent text-lightpink  border-transparent border-[0.5px]"
            }`}
          >
            {isWatched ? <GoCheck /> : <GoCheck />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
