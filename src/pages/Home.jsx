import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPopularMovies } from "../features/movies/movieSlice";
import MovieCard from "../components/MovieCard";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.movies);

  useEffect(() => {
    dispatch(fetchPopularMovies());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <Helmet>
        <title>MovieSite | Home</title>
        <meta
          name="description"
          content="Browse popular movies and find your new favorites"
        />
        <meta name="keywords" content="movies, popular, search, favorites" />
      </Helmet>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-darkerpurple py-10">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Home;
