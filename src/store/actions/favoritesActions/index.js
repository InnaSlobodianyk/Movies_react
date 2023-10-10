import { makeActionCreator } from 'store/actions';

export const FAVORITES_STORE_ACTIONS = {
  SET_FAVORITES_FETCHING: 'SET_FAVORITES_FETCHING',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  SET_FAVORITES: 'SET_FAVORITES',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

export const setFavoritesFetchingState = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_FAVORITES_FETCHING, payload );

export const setFavorites = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_FAVORITES, payload );

const addFavoriteItem = ( favoriteMovies, movieToAdd ) => [ { ...movieToAdd, favorite: true }, ...favoriteMovies ];

const removeFavoriteItem = ( favoriteMovies, movieToRemoveId ) => favoriteMovies.filter( ( favoriteMovie ) => favoriteMovie.id !== movieToRemoveId );

export const addMovieToFavorites = ( favoriteMovies, movieToAdd ) => {
  const newFavoriteMovies = favoriteMovies.indexOf( movieToAdd ) >= 0 ? favoriteMovies : addFavoriteItem( favoriteMovies, movieToAdd );

  return makeActionCreator( FAVORITES_STORE_ACTIONS.ADD_TO_FAVORITES, newFavoriteMovies );
};

export const removeMovieFromFavorites = ( favoriteMovies, movieToRemoveId ) => {
  const newFavoriteMovies = removeFavoriteItem( favoriteMovies, movieToRemoveId );

  return makeActionCreator( FAVORITES_STORE_ACTIONS.REMOVE_FROM_FAVORITES, newFavoriteMovies );
};

export const setFavoritesCurrentPage = ( payload ) => makeActionCreator( FAVORITES_STORE_ACTIONS.SET_CURRENT_PAGE, payload );
