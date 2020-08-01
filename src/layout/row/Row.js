import React, { useState, useEffect } from "react";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import "./Row.css";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await TmdbInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <section className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {/* multiple row_posters */}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row__poster"
            src={`${TmdbImgBaseUrl}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </section>
  );
}

export default Row;
