import { makeActionCreator } from 'store/actions';

export const MOVIE_STORE_ACTION = {
  SET_MOVIE_FETCHING: 'SET_MOVIE_FETCHING',
  SET_MOVIE: 'SET_MOVIE'
};

export const setMovieDetails = ( payload ) => makeActionCreator( MOVIE_STORE_ACTION.SET_MOVIE, payload );

export const setMovieFetchingState = ( payload ) => makeActionCreator( MOVIE_STORE_ACTION.SET_MOVIE_FETCHING, payload );