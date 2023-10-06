import { makeActionCreator } from 'store/actions';

export const POPULARS_STORE_ACTIONS = {
  SET_FETCHING_STATE: 'SET_FETCHING_STATE',
  SET_POPULARS: 'SET_POPULARS'
};

export const setPopularMoviesData = ( payload ) => makeActionCreator( POPULARS_STORE_ACTIONS.SET_POPULARS, payload );