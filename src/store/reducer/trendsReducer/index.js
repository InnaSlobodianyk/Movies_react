import { TRENDS_STORE_ACTIONS } from 'store/actions';

const trendsInitialState = {
  fetching: true,
  trends: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0
};

const trendsReducer = ( state = trendsInitialState, action ) => {
  switch (action.type) {
    case TRENDS_STORE_ACTIONS.SET_TRENDS_FETCHING:
      return {
        ...state,
        fetching: action.payload
      };
    case TRENDS_STORE_ACTIONS.SET_TRENDS:
      return {
        ...state,
        trends: action.payload.trends,
        currentPage: action.payload.currentPage,
        totalPages: action.payload.totalPages,
        totalResults: action.payload.totalResults
      };
    case TRENDS_STORE_ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        fetching: action.payload.fetching,
        currentPage: action.payload.page || 1
      };
    default:
      return state;
  }
};

export default trendsReducer;