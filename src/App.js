import React from "react";
import Row from "./layout/row/Row";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import requests from "./utils/request";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
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

export default App;
