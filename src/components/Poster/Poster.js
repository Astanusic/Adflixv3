import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { truncate } from "../../utils/truncate";
import "./Poster.css";

function Poster({ imgSrc, alt, className, onClick, movie, isLargeRow }) {
  const [isHover, setIsHover] = useState(false);

  return (
    <div
      className="poster"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <img
        onClick={onClick}
        src={imgSrc}
        alt={alt}
        className={`poster__image ${className}`}
      />

      {isHover &&
        (isLargeRow ? (
          <div className="poster__infos">
            <p className="poster__title">{truncate(movie?.name, 50)}</p>
            <p className="poster__overview">
              {truncate(movie?.overview, 170) ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quasi"}
            </p>
            <div className="poster__notes">
              <p className="poster__note">{Math.floor(movie?.vote_average)}</p>
              <FontAwesomeIcon icon={faStar} size="1x" />
            </div>
          </div>
        ) : (
          <div className="poster__infos">
            <p className="poster__title">
              {truncate(movie?.title, 15) || truncate(movie?.name, 15)}
            </p>
            <p className="poster__overview">
              {truncate(movie?.overview, 170) ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione, quasi"}
            </p>
          </div>
        ))}
    </div>
  );
}

export default Poster;
