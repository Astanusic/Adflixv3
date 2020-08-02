import React, { useState, useEffect } from "react";
import { truncate } from "../../utils/truncate";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import requests from "../../utils/request";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import Poster from "../../components/Poster/Poster";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./Row.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import axios from "axios";

// install Swiper components
SwiperCore.use([Navigation]);

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await TmdbInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const generateKey = (pre) => {
    return `${pre}_${new Date().getTime()}`;
  };

  async function fetchVideos(movie) {
    const request = await axios
      .get(
        `https://api.themoviedb.org/3/movie/${movie.id}${requests.featchVideos}`
      )
      .then((res) => {
        setTrailerUrl(res.data.videos?.results[0].key);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      fetchVideos(movie);
    }
  };

  return (
    <section className="row">
      <h2>{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        className="row__posters"
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide key={generateKey(Math.random() * 10)}>
            <Poster
              key={generateKey(movie.id)}
              movie={movie}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              imgSrc={`${TmdbImgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              isLargeRow={isLargeRow}
            />
            {!isLargeRow && (
              <div className="row__movieBottomInfos">
                <h5 className="row__movieTitle">
                  {truncate(movie?.title, 30)}
                </h5>
                <div className="row__notes">
                  <h5 className="row__movieNote">
                    {Math.floor(movie?.vote_average)}
                  </h5>
                  <FontAwesomeIcon icon={faStar} size="1x" />
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </section>
  );
}

export default Row;
