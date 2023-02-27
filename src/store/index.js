import { applyMiddleware, createStore } from "redux";
import thunkMiddleware from "redux-thunk";

import { getTrends } from "services/trends";
import { getSearchResults } from "services/searchResults";

export const STORE_ACTIONS = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_DATA: 'SET_DATA',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  GET_FAILURE: 'GET_FAILURE',
  SHOW_SEARCH_RESULTS: 'SHOW_SEARCH_RESULTS',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
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

const setMoviesData = ( data ) => ( { type: STORE_ACTIONS.SET_DATA, payload: data } );

const getFailure = () => ( { type: STORE_ACTIONS.GET_FAILURE } );

export const setLoadedState = ( isLoaded ) => ( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: isLoaded } );

export const setCurrentPage = ( page ) => ( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: page } );

export const setSearchResultsShow = ( showSearchRes ) => ( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: showSearchRes } );

export const setSearchQuery = ( query ) => ( { type: STORE_ACTIONS.SET_SEARCH_QUERY, payload: query } );

export const getMovieTrends = ( currentPage ) => {
  return ( dispatch ) => {
    getTrends(currentPage).then((response) => {
      response ? dispatch( setMoviesData(response) ) : dispatch( getFailure() );

      dispatch( setLoadedState(true) );
    });
  };
};

export const getMovieSearchResults = ( { searchQuery, currentPage } ) => {
  return ( dispatch ) => {
    dispatch( setLoadedState(false) );

    getSearchResults( searchQuery, currentPage ).then((response) => {
      response ? dispatch( setMoviesData(response) ) : dispatch( getFailure() );

      dispatch( setLoadedState(true) );
    });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;