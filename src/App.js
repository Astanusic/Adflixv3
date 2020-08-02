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
      <Row title="Populaires en ce moment" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantique" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Animation" fetchUrl={requests.fetchAnimMovies} />
    </div>
  );
}

export default App;
