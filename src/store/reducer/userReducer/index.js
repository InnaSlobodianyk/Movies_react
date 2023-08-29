import { USER_STORE_ACTIONS } from 'store/actions';

const userInitialState = {
  fetching: false,
  currentUser: null
};

const userReducer = ( state = userInitialState, action ) => {
  switch (action.type) {
    case USER_STORE_ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};

export default userReducer;