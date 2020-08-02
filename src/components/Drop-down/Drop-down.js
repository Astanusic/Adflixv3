import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import requests from "../../utils/request";
import { TmdbInstance } from "../../utils/axios";
import "./Drop-down.css";

function DropDown({ title }) {
  const [hasBeenClicked, setHasBeenClicked] = useState(false);
  const [itemClicked, setItemClicked] = useState(false);
  const [fetchUrl, setFetchUrl] = useState(requests.fetchGenres);
  const [genres, setGenres] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchGenres() {
      const request = await TmdbInstance.get(fetchUrl);
      setGenres(request.data.genres);
      return request;
    }

    fetchGenres();
  }, [fetchUrl]);

  const handleDropDownClick = () => {
    setHasBeenClicked(!hasBeenClicked);
  };

  return (
    <div className="dropdown">
      <h1>{title}</h1>
      <div
        className="dropdown__button"
        onClick={() => {
          handleDropDownClick();
        }}
      >
        <p className="dropdown__buttonText">Genres</p>
        <FontAwesomeIcon icon={faCaretDown} />
      </div>

      {hasBeenClicked && (
        <div className="dropdown__menu">
          {genres.map((genre) => {
            return (
              <p key={genre.id} className="dropdown__menuItem">
                {genre.name}
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDown;
