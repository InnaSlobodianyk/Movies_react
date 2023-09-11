import { makeActionCreator } from 'store/actions';

export const USER_STORE_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_USER_FETCHING: 'SET_USER_FETCHING'
};

export const setCurrentUser = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_CURRENT_USER, payload );

export const setUserFetching = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_USER_FETCHING, payload );