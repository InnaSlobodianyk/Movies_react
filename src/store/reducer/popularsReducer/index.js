import { POPULARS_STORE_ACTIONS } from 'store/actions';

export const popularsInitialState = {
  fetching: true,
  popularMovies: []
};

const popularsReducer = ( state = popularsInitialState, action ) => {
  switch (action.type) {
    case POPULARS_STORE_ACTIONS.SET_FETCHING_STATE:
      return {
        ...state,
        fetching: action.payload
      };
    case POPULARS_STORE_ACTIONS.SET_POPULARS:
      return {
        ...state,
        fetching: action.payload?.fetching,
        popularMovies: action.payload?.movies
      };
    default:
      return state;
  }
};

export default popularsReducer;