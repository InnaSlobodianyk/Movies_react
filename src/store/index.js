import { createStore } from "redux";

export const STORE_ACTIONS = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_DATA: 'SET_DATA',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  GET_FAILURE: 'GET_FAILURE',
  SHOW_SEARCH_RESULTS: 'SHOW_SEARCH_RESULTS',
  SEARCH_QUERY: 'SEARCH_QUERY',
};

const initialState = {
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
    case STORE_ACTIONS.SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload
      };
    case STORE_ACTIONS.GET_FAILURE:
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;