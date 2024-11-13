const initialState = {
    searchResults: [],
    movieDetails: null,
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIES':
        return { ...state, searchResults: action.payload };
      case 'SET_MOVIE_DETAILS':
        return { ...state, movieDetails: action.payload };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  