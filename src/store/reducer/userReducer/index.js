import { USER_STORE_ACTIONS } from 'store/actions';

const userInitialState = {
  fetching: true,
  currentUser: null
};

const userReducer = ( state = userInitialState, action ) => {
  switch (action.type) {
    case USER_STORE_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    case USER_STORE_ACTIONS.SET_USER_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;