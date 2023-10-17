import { makeActionCreator } from 'store/actions';

export const FAVORITES_STORE_ACTIONS = {
  SET_FAVORITES_FETCHING: 'SET_FAVORITES_FETCHING',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_FAVORITES_ERROR: 'SET_FAVORITES_ERROR'
};

export const setFavoritesFetchingState = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_FAVORITES_FETCHING, payload );

export const setFavorites = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_FAVORITES, payload );

export const addMovieToFavorites = ( movieToAdd ) => makeActionCreator( FAVORITES_STORE_ACTIONS.ADD_TO_FAVORITES, movieToAdd );

export const removeMovieFromFavorites = ( movieToRemoveId ) => makeActionCreator( FAVORITES_STORE_ACTIONS.REMOVE_FROM_FAVORITES, movieToRemoveId );

export const setFavoritesCurrentPage = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_CURRENT_PAGE, payload );

export const seFavoritesError = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_FAVORITES_ERROR, payload );
