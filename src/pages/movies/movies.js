import React, { useState, useEffect } from "react";
import Hero from "../../components/Hero/Hero";
import Row from "../../layout/row/Row";
import requests from "../../utils/request";
import { TmdbInstance } from "../../utils/axios";

import "./movies.css";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [fetchUrl, setfetchUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await TmdbInstance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="movies">
      <Hero fetchUrl={requests.featchLatest} hasDropDown />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Adventure" fetchUrl={requests.fetchAventureMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Crime" fetchUrl={requests.fetchCrimeMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      <Row title="Drama" fetchUrl={requests.fetchDramaMovies} />
      <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Fantasy" fetchUrl={requests.fetchFantasyMovies} />
    </div>
  );
}

export default Movies;
