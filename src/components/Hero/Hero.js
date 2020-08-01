import React, { useState, useEffect } from "react";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import requests from "../../utils/request";
import "./Hero.css";

function Hero() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await TmdbInstance.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie.backdrop_path);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="hero"
      style={{
        backgroundImage: `url(
              "${TmdbImgBaseUrl}${movie?.backdrop_path}"
              )`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero__contents">
        <h1 className="hero__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="hero__buttons">
          <button className="hero__button">Play</button>
          <button className="hero__button">Ma Liste</button>
        </div>

        <h1 className="hero__description">{truncate(movie?.overview, 150)}</h1>
      </div>

      <div className="hero--fadeBottom" />
    </header>
  );
}

export default Hero;
