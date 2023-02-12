export const initialState = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0,
  popularMovies: []
};

export const ACTIONS = {
  SET_DATA: 'setData',
  SET_CURRENT_PAGE: 'setCurrentPage',
  GET_FAILURE: 'getFailure'
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SET_DATA:
      return {
        ...state,
        movies: action.payload?.movies?.movies || state.movies,
        totalResults: action.payload?.movies?.totalResults || state.totalResults,
        currentPage: action.payload?.movies?.page || state.currentPage,
        totalPages: action.payload?.movies?.totalPages || state.totalPages,
        popularMovies: action.payload?.populars || state.popularMovies
      };
    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case ACTIONS.GET_FAILURE:
    default:
      return state;
  }
}