import React from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import Movies from "./pages/movies/movies";
import TvShows from "./pages/tv-shows/tv-shows";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
require("dotenv").config();

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/tv-shows">
          <TvShows />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
