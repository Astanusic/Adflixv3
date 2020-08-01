import React from "react";
import Row from "./layout/row/Row";
import requests from "./utils/request";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Is it working ? </h1>
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
      />
      <Row title="Populaires en ce moment" fetchUrl={requests.fetchTrending} />
      <Row title="Les mieux notés" fetchUrl={requests.fetchTopRated} />
      <Row title="Action" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comédies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horreur" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantique" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaires" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
