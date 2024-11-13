import axios from 'axios';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Action to fetch movies by search query
export const fetchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(`${BASE_URL}/search/movie`, {
      params: { api_key: API_KEY, query },
    });
    dispatch({ type: 'SET_MOVIES', payload: response.data.results });
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

// Action to fetch movie details
export const fetchMovieDetails = (movieId) => async (dispatch) => {
  try {
    const [details, credits, recommendations] = await Promise.all([
      axios.get(`${BASE_URL}/movie/${movieId}`, { params: { api_key: API_KEY } }),
      axios.get(`${BASE_URL}/movie/${movieId}/credits`, { params: { api_key: API_KEY } }),
      axios.get(`${BASE_URL}/movie/${movieId}/recommendations`, { params: { api_key: API_KEY } }),
    ]);
    dispatch({
      type: 'SET_MOVIE_DETAILS',
      payload: { details: details.data, credits: credits.data, recommendations: recommendations.data.results },
    });
  } catch (error) {
    console.error('Error fetching movie details:', error);
  }
};
