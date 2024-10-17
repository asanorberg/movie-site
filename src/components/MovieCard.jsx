import React from "react";
import { Link } from "react-router-dom";
import {
  GoStar,
  GoStarFill,
  GoCalendar,
  GoClock,
  GoUnmute,
} from "react-icons/go";
import FavoriteButton from "./FavoriteButton";
import moviesite_logo from "../assets/moviesite_logo.png";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  const posterUrl = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : moviesite_logo;

  return (
    <div className="movie-card bg-darkpurple  text-white w-[300px] h-fit rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
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
        {" "}
        <div className="flex justify-between">
          <h2 className="text-white font-thin text-[18px] mb-2 mt-0">
            {movie.title}
          </h2>
          <FavoriteButton movie={movie} />
        </div>
        <span className="flex text-md just text-darkyellow">
          <div className="flex mr-1">
            {" "}
            <GoStarFill />
          </div>{" "}
          {movie.vote_average.toFixed(1)}
        </span>
        <div className="mt-4 flex flex-col text-sm tracking-wide">
          <span>
            <p className="flex items-center text-white gap-2 m-0">
              <GoCalendar className=" text-darkyellow" />

              {movie.release_date
                ? movie.release_date.split("-")[0]
                : "Unknown"}
            </p>{" "}
          </span>{" "}
          <span>
            <p className="flex items-center text-white gap-2  m-0">
              <GoUnmute className=" text-darkyellow" />
              {movie.original_language.toUpperCase()}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
