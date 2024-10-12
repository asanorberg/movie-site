import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../services/movieService";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const fetchedMovies = await getPopularMovies();
        setMovies(fetchedMovies);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    getData();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-darkerpurple py-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
