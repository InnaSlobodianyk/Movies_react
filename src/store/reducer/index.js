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
        movies: action.payload?.movies?.movies || state.movies,
        totalResults: action.payload?.movies?.totalResults || state.totalResults,
        currentPage: action.payload?.movies?.page || state.currentPage,
        totalPages: action.payload?.movies?.totalPages || state.totalPages,
        popularMovies: action.payload?.populars || state.popularMovies
      };
    case STORE_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case STORE_ACTIONS.SHOW_SEARCH_RESULTS:
      return {
        ...state,
        showSearchResults: action.payload
      };
    case STORE_ACTIONS.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case STORE_ACTIONS.GET_FAILURE:
    default:
      return state;
  }
};

export default reducer;