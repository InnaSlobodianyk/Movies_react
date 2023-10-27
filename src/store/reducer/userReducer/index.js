import { USER_STORE_ACTIONS } from 'store/actions/userActions';

const userInitialState = {
  fetching: false,
  currentUser: undefined,
  errorDefaultMessage: '',
  errorDisplayNameMessage: '',
  errorEmailMessage: '',
  errorPasswordMessage: '',
  errorConfirmPasswordMessage: '',
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
    case USER_STORE_ACTIONS.SET_ERROR_DEFAULT_MESSAGE:
      return {
        ...state,
        errorDefaultMessage: payload
      };
    default:
      return state;
  }
};

export default userReducer;