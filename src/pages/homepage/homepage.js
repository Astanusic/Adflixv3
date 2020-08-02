import React from "react";
import Hero from "../../components/Hero/Hero";
import Row from "../../layout/row/Row";
import requests from "../../utils/request";

function Homepage() {
  return (
    <div>
      <Hero />
      <Row
        title="NETFLIX ORIGINALS"
        isLargeRow
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Most popular these days" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimMovies} />
    </div>
  );
}

export default Homepage;
