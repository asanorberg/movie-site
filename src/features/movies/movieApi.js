const API_URL = "https://api.themoviedb.org/3"; // Base URL for API
const API_KEY = import.meta.env.VITE_API_KEY; // Your API key

export const fetchPopularMoviesAPI = async () => {
  const response = await fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results; // Return only the movie results
};

export const searchMoviesAPI = async (query) => {
  const response = await fetch(
    `${API_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results; // Return the search results
};
