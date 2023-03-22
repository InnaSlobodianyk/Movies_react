import { STORE_ACTIONS } from '../actions';

export const initialState = {
  loaded: false,
  movies: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0,
  popularMovies: [],
  showSearchResults: false,
  searchQuery: '',
  movie: {},
};

const reducer = ( state = initialState, action ) => {
  switch (action.type) {
    case STORE_ACTIONS.SET_LOADED_STATE:
      return {
        ...state,
        loaded: action.payload
      };
    case STORE_ACTIONS.SET_DATA:
      return {
        ...state,
        movies: action.payload?.movies || state.movies,
        totalResults: action.payload?.totalResults || state.totalResults,
        currentPage: action.payload?.page || state.currentPage,
        totalPages: action.payload?.totalPages || state.totalPages,
        popularMovies: action.payload?.populars || state.popularMovies
      };
    case STORE_ACTIONS.SET_DEFAULT_DATA:
      return {
        ...state,
        loaded: false,
        currentPage: 1,
        showSearchResults: false,
        searchQuery: ''
      };
    case STORE_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        loaded: action.payload?.loaded || state.loaded,
        currentPage: action.payload?.page || 1
      };
    case STORE_ACTIONS.SET_SEARCH:
      return {
        ...state,
        loaded: action.payload?.loaded || true,
        showSearchResults: action.payload?.showSearchRes || false,
        searchQuery: action.payload?.query || '',
        currentPage: action.payload?.page || 1
      };
    case STORE_ACTIONS.SET_MOVIE_DETAILS:
      return {
        ...state,
        movie: action.payload || state.movie
      };
    default:
      return state;
  }
};

export default reducer;