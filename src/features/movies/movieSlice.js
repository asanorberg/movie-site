import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMoviesAPI, searchMoviesAPI } from "./movieAPI";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const movies = await fetchPopularMoviesAPI();
    return movies;
  }
);

// Async thunk for searching movies
export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (query) => {
    const movies = await searchMoviesAPI(query);
    return movies;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle popular movies
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Handle search movies
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload; // Update movies with search results
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
