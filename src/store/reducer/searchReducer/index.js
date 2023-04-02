import { SEARCH_STORE_ACTIONS } from 'store/actions';

export const searchInitialState = {
  fetching: false,
  searchedMovies: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0
};

const searchReducer = ( state = searchInitialState, action ) => {
  switch (action.type) {
    case SEARCH_STORE_ACTIONS.SET_SEARCH_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };

    case SEARCH_STORE_ACTIONS.SET_SEARCH:
      return {
        ...state,
        fetching: action.payload?.fetching,
        currentPage: action.payload?.page,
        searchQuery: action.payload?.searchQuery
      };

    case SEARCH_STORE_ACTIONS.SET_SEARCH_MOVIES:
      return {
        ...state,
        searchQuery: action.payload?.searchQuery,
        searchedMovies: action.payload?.searchedMovies,
        totalResults: action.payload?.totalResults,
        currentPage: action.payload?.page,
        totalPages: action.payload?.totalPages,
      };

    case SEARCH_STORE_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        fetching: action.payload?.fetching,
        currentPage: action.payload?.page || 1
      };

    case SEARCH_STORE_ACTIONS.SET_DEFAULT_DATA:
      return {
        ...state,
        fetching: false,
        searchQuery: '',
        searchedMovies: [],
        totalResults: 0,
        currentPage: 1,
        totalPages: 0
      };

    default:
      return state;
  }
};

export default searchReducer;