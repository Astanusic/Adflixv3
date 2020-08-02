const API_KEY = "16f931d6938e74b558cb01e53faf1064";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&language=en-US`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&language=en-US`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&language=en-US`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&language=en-US`,
  fetchAnimMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16&language=en-US`,
  featchVideos: `?api_key=${API_KEY}&append_to_response=videos`,
};

export default requests;
