import axios from "axios";

const TmdbInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

const TmdbImgBaseUrl = "https://image.tmdb.org/t/p/original";

export { TmdbInstance, TmdbImgBaseUrl };
