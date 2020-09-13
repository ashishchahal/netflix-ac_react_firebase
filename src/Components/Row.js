import React, { useState, useEffect } from "react";
import axios from "../axios";
import "../Styles/Row.css";

const baseUrl = `https://image.tmdb.org/t/p/original/`;

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    // run once if [] are left blank, & dont run again
    // if [movies] is there, it runs every time movie changes

    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
      //console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>
      <div className="row__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${baseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
      {/* container --> posters */}
    </div>
  );
}

export default Row;
