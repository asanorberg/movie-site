// imdB api
const API_URL = "https://api.themoviedb.org/3/";
const API_KEY = import.meta.env.VITE_API_KEY;

// Hämta populära filmer
export const getPopularMovies = async () => {
  const response = await fetch(`${API_URL}movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  console.log(data);
  return data.results;
};
