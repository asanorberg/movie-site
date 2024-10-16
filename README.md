# MovieSite 🍿

## Overview

This is a movie application built with React, Vite and Redux Toolkit. It allows users to search for movies, view details, and manage a favorites list.

## Features

- **Movie Search**: Users can search for movies by title, and results are displayed in a list.
- **Movie Details**: Users can click on a movie to view detailed information including the poster, overview, and release date.
- **Favorites**: Users can add movies to their favorites list. This list is saved in local storage, ensuring persistence even after page refreshes.
- **Responsive Design**: The application is designed to work on various screen sizes.
  - Design heavily inspired by [this Figma project](https://www.figma.com/community/file/828234123465041815/cinema-app-dribbble-shot)


## Technologies

- **Vite + React**: Front-end framework for building the UI.
- **Redux Toolkit**: For global state management.
- **React Router**: For routing and navigation between different pages.
- **Styled Components/Tailwind CSS**: For styling and responsive layout (mobile friendly)
- **The Movie Database (TMDb) API**: For fetching movie data.
  
  <img src="src/assets/blue_long_2-9665a76b1ae401a510ec1e0ca40ddcb3b0cfe45f1d51b77a308fea0845885648.svg" alt="TMDb API" style="width: 300px; height: auto;" />

- **Cypress**: For end-to-end testing.
- **SEO**: Implemented with meta tags, sitemap, robots.txt.
- **Git**: For version control.
- **LocalStorage**: For persistent state management of favorites.

## Installation

Follow these steps to set up and run the application locally:

1. **Clone the repository**:
  ```bash
    git clone https://github.com/your-username/movie-app.git
    cd movie-app
   ```

2. **Install dependencies**:

Make sure you have Node.js installed. Then run:
    
  ```bash
    npm install
  ```

3. **Set up environment variables**:

Create a .env file in the root directory and add your TMDB API key:
```env
  REACT_APP_TMDB_API_KEY=your_api_key_here
```
3. **Run the application**:
Start the development server:
```bash
  npm run dev
```
The application should now be running on your localhost

## Usage 🚀
- Searching for Movies: Use the search bar on the homepage to find movies. Hit Enter or click the Magnifying Glass Icon.
- Viewing Movie Details: Click on any movie from the search results to view its details.
- Managing Favorites: Click on the heart icon to add or remove movies from your favorites list. Your favorites will be saved even on page refresh.


