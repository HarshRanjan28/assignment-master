import React, { useEffect, useState } from "react";
import Homepage from "./components/Homepage";
import Description from "./components/Description";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const API_URL = "https://api.tvmaze.com/search/shows?q=all";

function App() {
  const [movies, setMovies] = useState([]);
  const [filterData, setFilterData] = useState(null)

  const pull_data = (data) => {
    setFilterData(data)
  }

  useEffect(async () => {
    const moviesresp = await fetch(API_URL);
    const moviesR = await moviesresp.json();
    setMovies(moviesR);
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage func={pull_data} />} />
        <Route
          path="/Description"
          element={<Description movies={filterData} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
