import React from "react";

function Poster({ imgSrc, alt, className, onClick }) {
  return <img onClick={onClick} src={imgSrc} alt={alt} className={className} />;
}

export default Poster;
