const API_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_API_KEY;

export const fetchPopularMoviesAPI = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`); //Hämta popular movies
  const data = await response.json();
  return data.results;
};

export const searchMoviesAPI = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      //Hämta sökresultat
      query
    )}`
  );
  const data = await response.json();
  return data.results;
};
