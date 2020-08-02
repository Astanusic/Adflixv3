import React, { useState, useEffect } from "react";
import DropDown from "../../components/Drop-down/Drop-down";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import { truncate } from "../../utils/truncate";
import "./Hero.css";

function Hero({ fetchUrl, hasDropDown, handleItemClick }) {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await TmdbInstance.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

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
      {hasDropDown && (
        <DropDown title="Movies" handleItemClick={handleItemClick} />
      )}
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
