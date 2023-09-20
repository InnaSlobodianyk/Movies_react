import { USER_STORE_ACTIONS } from 'store/actions/userActions';

const userInitialState = {
  fetching: true,
  currentUser: null,
  errorDefaultMessage: '',
  errorDisplayNameMessage: '',
  errorEmailMessage: '',
  errorPasswordMessage: '',
  errorConfirmPasswordMessage: '',
  authenticatedUser: false
};

const userReducer = ( state = userInitialState, action ) => {
  const { type, payload } = action;
  switch (type) {
    case USER_STORE_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    case USER_STORE_ACTIONS.SET_USER_FETCHING:
      return {
        ...state,
        fetching: payload
      };
    case USER_STORE_ACTIONS.SET_ERROR_WRONG_PASSWORD_MESSAGE:
      return {
        ...state,
        errorPasswordMessage: payload
      };
    case USER_STORE_ACTIONS.SET_ERROR_NO_USER_MESSAGE:
      return {
        ...state,
        errorEmailMessage: payload
      };
    case USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE:
      return {
        ...state,
        errorDefaultMessage: payload
      };
    case USER_STORE_ACTIONS.RESET_ERROR_MESSAGE:
      return {
        ...state,
        errorDefaultMessage: '',
        errorDisplayNameMessage: '',
        errorEmailMessage: '',
        errorPasswordMessage: '',
        errorConfirmPasswordMessage: ''
      };
    case USER_STORE_ACTIONS.SET_ERROR_MATCH_PASSWORD_MESSAGE:
      return {
        ...state,
        errorConfirmPasswordMessage: payload
      };
    case USER_STORE_ACTIONS.SET_ERROR_EMAIL_IN_USE_MESSAGE:
      return {
        ...state,
        errorEmailMessage: payload
      };
    case USER_STORE_ACTIONS.SET_AUTHENTICATED_USER:
      return {
        ...state,
        authenticatedUser: payload
      };
    default:
      return state;
  }
};

export default userReducer;