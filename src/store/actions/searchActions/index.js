import { makeActionCreator } from 'store/actions';

export const SEARCH_STORE_ACTIONS = {
  SET_SEARCH_FETCHING: 'SET_SEARCH_FETCHING',
  SET_SEARCH_MOVIES: 'SET_SEARCH_MOVIES',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_DEFAULT_DATA: 'SET_DEFAULT_DATA',
};

export const setSearchMoviesData = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_SEARCH_MOVIES, payload );

export const setSearchFetchingState = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_SEARCH_FETCHING, payload );

export const setSearchCurrentPage = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_CURRENT_PAGE, payload );

export const setSearchDefaultData = makeActionCreator( SEARCH_STORE_ACTIONS.SET_DEFAULT_DATA );