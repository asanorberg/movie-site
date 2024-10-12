import React from "react";
import { Link } from "react-router-dom";
import {
  GoHeart,
  GoHeartFill,
  GoStar,
  GoStarFill,
  GoCalendar,
  GoClock,
  GoUnmute,
} from "react-icons/go";

const MovieCard = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/w300";
  const posterUrl = movie.poster_path
    ? `${imageUrl}${movie.poster_path}`
    : "https://via.placeholder.com/500x750?text=No+Poster";

  return (
    <Link className="no-underline" to={`/movie/${movie.id}`}>
      <div className="bg-darkpurple  text-white w-[300px] h-fit rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full object-cover mb-4 rounded-t-lg"
        />
        <div className="flex flex-col text-left">
          {" "}
          <h2 className="text-white font-thin text-[18px] mb-2">
            {movie.title}
          </h2>
          <span className="flex text-md just gap-3 text-darkyellow">
            <div className="flex gap-1">
              {" "}
              <GoStarFill />
              <GoStarFill />
              <GoStarFill /> <GoStar />
              <GoStar />
            </div>{" "}
            {movie.vote_average}
          </span>
          <div className="mt-4 gap-1 flex flex-col text-sm tracking-wide">
            <span>
              <p className="flex items-center text-white gap-2">
                <GoCalendar className=" text-darkyellow" />

                {movie.release_date
                  ? movie.release_date.split("-")[0]
                  : "Unknown"}
              </p>{" "}
            </span>{" "}
            <span>
              <p className="flex items-center text-white gap-2">
                <GoUnmute className=" text-darkyellow" />
                {movie.original_language.toUpperCase()}
              </p>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
