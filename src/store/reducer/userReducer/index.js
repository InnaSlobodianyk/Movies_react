import { USER_STORE_ACTIONS } from 'store/actions/userActions';

const userInitialState = {
  fetching: false,
  currentUser: undefined,
  errorDefaultMessage: '',
  errorDisplayNameMessage: '',
  errorEmailMessage: '',
  errorPasswordMessage: '',
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
      };
    case USER_STORE_ACTIONS.SET_ERROR_EMAIL_IN_USE_MESSAGE:
      return {
        ...state,
        errorEmailMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;