import { FAVORITES_STORE_ACTIONS } from 'store/actions/favoritesActions';

const favoritesInitialState = {
  fetching: false,
  favoriteMovies: [],
  currentPage: 1,
  errorMessage: '',
};

const favoritesReducer = ( state = favoritesInitialState, action ) => {
  switch (action.type) {
    case FAVORITES_STORE_ACTIONS.SET_FAVORITES_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case FAVORITES_STORE_ACTIONS.ADD_TO_FAVORITES:
      return {
        ...state,
        favoriteMovies: [ { ...action.payload }, ...state.favoriteMovies ]
      };
    case FAVORITES_STORE_ACTIONS.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter( ( favoriteMovie ) => favoriteMovie.id !== action.payload )
      };
    case FAVORITES_STORE_ACTIONS.SET_FAVORITES:
      return {
        ...state,
        favoriteMovies: action.payload.favoriteMovies,
        currentPage: action.payload.currentPage
      };
    case FAVORITES_STORE_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        fetching: action.payload.fetching,
        currentPage: action.payload.page || 1
      };
    case FAVORITES_STORE_ACTIONS.SET_FAVORITES_ERROR:
      return {
        ...state,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default favoritesReducer;