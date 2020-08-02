import React, { useState, useEffect } from "react";
import DropDown from "../../components/Drop-down/Drop-down";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import { truncate } from "../../utils/truncate";
import YouTube from "react-youtube";
import getYouTubeID from "get-youtube-id";
import movieTrailer from "movie-trailer";

import "./Hero.css";

function Hero({ fetchUrl, hasDropDown, handleItemClick }) {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hasBeenClicked, setHasBeenClicked] = useState(false);

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

  const opts = {
    height: "600",
    width: "60%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    setHasBeenClicked(!hasBeenClicked);
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(`${movie?.title || movie?.name}`)
        .then((url) => {
          const id = getYouTubeID(url);
          setTrailerUrl(id);
          console.log(id);
        })
        .catch((err) => console.log(err));
    }
  };

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
          <button className="hero__button" onClick={() => handleClick(movie)}>
            Play
          </button>
          <button className="hero__button">Ma Liste</button>
        </div>

        <h1 className="hero__description">{truncate(movie?.overview, 250)}</h1>
        {hasBeenClicked && (
          <YouTube
            className="youtube__player"
            videoId={trailerUrl}
            opts={opts}
          />
        )}
      </div>

      <div className="hero--fadeBottom" />
    </header>
  );
}

export default Hero;
