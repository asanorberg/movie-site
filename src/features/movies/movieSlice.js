import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPopularMoviesAPI, searchMoviesAPI } from "./movieApi";

export const fetchPopularMovies = createAsyncThunk(
  "movies/fetchPopularMovies",
  async () => {
    const movies = await fetchPopularMoviesAPI(); //Anropa API för att hämta popular movies
    return movies;
  }
);

export const searchMovies = createAsyncThunk(
  "movies/searchMovies",
  async (query) => {
    const movies = await searchMoviesAPI(query); //Anropa API för att söka efter filmer
    return movies;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [], //Här lagras filmer
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // Hantera asynkrona actions

    builder
      .addCase(fetchPopularMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPopularMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload; // Lägger in hämtade filmer i state
      })
      .addCase(fetchPopularMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(searchMovies.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload; // Uppdaterar state med sökresultaten
      })
      .addCase(searchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default movieSlice.reducer;
