import React, { useState, useEffect } from "react";
import { TmdbInstance, TmdbImgBaseUrl } from "../../utils/axios";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Mousewheel } from "swiper";
import Poster from "../../components/Poster/Poster";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

// install Swiper components
SwiperCore.use([Navigation, Mousewheel]);

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

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  console.log(trailerUrl);

  return (
    <section className="row">
      <h2>{title}</h2>

      <Swiper
        spaceBetween={20}
        slidesPerView={6}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="row__posters"
        navigation
        pagination={{ clickable: true }}
      >
        {movies.map((movie) => (
          <SwiperSlide>
            <Poster
              key={movie.id}
              onClick={() => handleClick(movie)}
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              imgSrc={`${TmdbImgBaseUrl}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </section>
  );
}

export default Row;
