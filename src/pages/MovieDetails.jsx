import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Button from "../components/Button";
import {
  GoStar,
  GoStarFill,
  GoCalendar,
  GoClock,
  GoUnmute,
  GoGlobe,
} from "react-icons/go";
import FavoriteButton from "../components/FavoriteButton";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const MovieDetails = () => {
  const { id } = useParams(); // Hämta film via URL baserat på id
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await fetch(
          `${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
        );
        const movieData = await movieResponse.json();
        console.log(movieData);
        setMovie(movieData);

        const creditsResponse = await fetch(
          `${BASE_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
        );
        const creditsData = await creditsResponse.json();
        console.log(creditsData);

        setCredits(creditsData);
      } catch (error) {
        console.error("Failed to fetch movie data", error);
      }
    };

    fetchMovieDetails();
  }, [id]);

  const director = credits?.crew?.find((member) => member.job === "Director");
  const actors = credits?.cast?.slice(0, 5);

  return movie ? (
    <div className="flex h-full flex-col md:flex-row w-full p-10 bg-darkerpurple">
      {/* Movie Poster */}
      <div className="flex justify-center min-w-[300px] max-w-[500px] px-4 mb-8 md:mb-0">
        <img
          className="w-full object-cover rounded-lg md:mr-10"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      </div>

      {/* Movie Details */}
      <div className="md:w-1/2 text-white">
        <span className="flex items-center justify-between">
          <h1 className="text-3xl m-0">{movie.title}</h1>
          <FavoriteButton movie={movie} />
        </span>
        <h3 className="text-xl font-thin opacity-40 mt-0 tracking-wide">
          {movie.release_date.split("-")[0]}
        </h3>
        <p className="opacity-75">{movie.overview}</p>
        <p className="opacity-40 mb-4">
          {movie.genres.map((genre, index) => (
            <span key={genre.id}>
              {genre.name}
              {index < movie.genres.length - 1 ? ", " : ""}
            </span>
          ))}
        </p>{" "}
        <div className="flex-col flex gap-2">
          <div className="flex gap-2">
            <GoCalendar className="text-darkyellow" />
            <span className="opacity-75">
              {" "}
              {movie.release_date.split("-")[0]}
            </span>
          </div>

          <div className="flex gap-2">
            <GoClock className="text-darkyellow" />
            <span className="opacity-75">{movie.runtime} min</span>
          </div>

          <div className="flex gap-2">
            <GoGlobe className="text-darkyellow" />
            <span className="opacity-75">{movie.origin_country}</span>
          </div>

          <div className="flex gap-2">
            <GoUnmute className="text-darkyellow" />
            <span className="opacity-75">
              {movie.original_language.toUpperCase()}
            </span>
          </div>

          {/* Director Section */}
          <h4 className="text-lg font-bold mb-2">Director</h4>
          <div className="flex flex-col items-start text-left mb-4">
            <Button color="textbutton" size="md">
              {director?.name}
            </Button>
          </div>

          {/* Actors Section */}
          <h4 className="text-lg font-bold mb-2">Actors</h4>
          <div className="flex flex-wrap items-start text-left gap-2">
            {actors?.map((actor) => (
              <Button key={actor.id} color="textbutton" size="md">
                {actor.name}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="text-white">Loading...</div>
  );
};

export default MovieDetails;
