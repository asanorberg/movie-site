import React from "react";
import { Link } from "react-router-dom";
import { GoStarFill, GoCalendar, GoUnmute, GoCheck } from "react-icons/go";
import FavoriteButton from "./FavoriteButton";
import { useDispatch, useSelector } from "react-redux";
import {
  markAsWatched,
  unmarkAsWatched,
} from "../features/watched/watchedSlice";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  const posterUrl = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : "path/to/placeholder-image.jpg";

  const dispatch = useDispatch();
  const watchedList = useSelector((state) => state.watched.watchedList);

  const handleToggleWatched = () => {
    if (watchedList.includes(movie.id)) {
      dispatch(unmarkAsWatched(movie.id));
    } else {
      dispatch(markAsWatched(movie.id));
    }
  };

  const isWatched = watchedList.includes(movie.id);

  return (
    <div className="movie-card bg-darkpurple text-white w-[300px] h-fit rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
      <Link className="no-underline" to={`/movie/${movie.id}`}>
        <img
          src={posterUrl}
          alt={movie.title}
          className={`w-full object-cover rounded-t-lg pb-0`}
        />
      </Link>
      <div className="flex flex-col text-left p-4 mt-0">
        <div className="flex justify-between">
          <h2 className="text-white font-thin text-[18px] mb-2 mt-0">
            {movie.title}
          </h2>
          <FavoriteButton movie={movie} />
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
