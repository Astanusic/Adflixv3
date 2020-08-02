import React, { useState } from "react";
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

      {isHover && isLargeRow ? (
        <>
          <h5 className="poster__title">{truncate(movie?.overview, 170)}</h5>
          <p className="poster__year">{movie?.release_date}</p>
        </>
      ) : null}
    </div>
  );
}

export default Poster;
