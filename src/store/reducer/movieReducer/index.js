import { MOVIE_STORE_ACTION } from 'store/actions';

const movieInitialState = {
  fetching: false,
  movie: []
};

const movieReducer = ( state = movieInitialState, action ) => {
  switch (action.type) {
    case MOVIE_STORE_ACTION.SET_MOVIE_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case MOVIE_STORE_ACTION.SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    default:
      return state;
  }
};

export default movieReducer;