import { makeActionCreator } from 'store/actions';

export const USER_STORE_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER',
  SET_USER_FETCHING: 'SET_USER_FETCHING',
  SET_ERROR_WRONG_PASSWORD_MESSAGE: 'SET_ERROR_WRONG_PASSWORD_MESSAGE',
  SET_ERROR_NO_USER_MESSAGE: 'SET_ERROR_NO_USER_MESSAGE',
  SET_ERROR_DEFAULT_MESSAGE: 'SET_ERROR_DEFAULT_MESSAGE',
  SET_ERROR_MATCH_PASSWORD_MESSAGE: 'SET_ERROR_MATCH_PASSWORD_MESSAGE',
  SET_ERROR_EMAIL_IN_USE_MESSAGE: 'SET_ERROR_EMAIL_IN_USE_MESSAGE',
  RESET_ERROR_MESSAGE: 'RESET_ERROR_MESSAGE',
};

export const setCurrentUser = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_CURRENT_USER, payload );

export const setUserFetching = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_USER_FETCHING, payload );

export const setSignInErrorMessage = ( error ) => {
  switch( error.code ) {
    case 'auth/wrong-password':
      return makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_WRONG_PASSWORD_MESSAGE, 'Incorrect password' );
    case 'auth/user-not-found':
      return makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_NO_USER_MESSAGE, 'No user associated with this email' );
    default:
      return makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE, error.message );
  }
};

export const resetSignInErrorMessage = () => makeActionCreator( USER_STORE_ACTIONS.RESET_ERROR_MESSAGE );

export const setSignUpErrorMatchPasswordMessage = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_MATCH_PASSWORD_MESSAGE, payload );

export const setSignUpErrorMessage = ( error ) => {
  switch( error.code ) {
    case 'auth/email-already-in-use':
      return makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_EMAIL_IN_USE_MESSAGE, 'Cannot create user, email already in use' );
    default:
      return makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE, 'User creation encountered an error' );
  }
};

export const setLogOutError = ( error ) => makeActionCreator( USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE, error.message );