const API_KEY = "16f931d6938e74b558cb01e53faf1064";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&&language=fr`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=fr`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&&language=fr`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=fr`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=fr`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=fr`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=fr`,
  fetchAnimMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=fr`,
  featchVideos: `?api_key=${API_KEY}&append_to_response=videos`,
};

export default requests;
