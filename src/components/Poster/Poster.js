import React from "react";

function Poster({ imgSrc, alt, className }) {
  return <img src={imgSrc} alt={alt} className={className} />;
}

export default Poster;
