import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout"; // Adjust path based on your structure
import Home from "./pages/Home"; // Import your page components
import MovieDetails from "./pages/MovieDetails"; // Another example of a page

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
