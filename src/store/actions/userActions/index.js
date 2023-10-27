import { makeActionCreator } from 'store/actions';

export const USER_STORE_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_USER_FETCHING: 'SET_USER_FETCHING',
  SET_ERROR_DEFAULT_MESSAGE: 'SET_ERROR_DEFAULT_MESSAGE',
};

export const setCurrentUser = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_CURRENT_USER, payload );

export const setUserFetching = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_USER_FETCHING, payload );

export const setSignInErrorMessage = ( error ) => makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE, error.message );

export const setLogOutError = ( error ) => makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE, error.message );