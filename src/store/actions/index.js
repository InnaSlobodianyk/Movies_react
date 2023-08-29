export const POPULARS_STORE_ACTIONS = {
  SET_FETCHING_STATE: 'SET_FETCHING_STATE',
  SET_POPULARS: 'SET_POPULARS'
};

export const TRENDS_STORE_ACTIONS = {
  SET_TRENDS_FETCHING: 'SET_TRENDS_FETCHING',
  SET_TRENDS: 'SET_TRENDS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

export const SEARCH_STORE_ACTIONS = {
  SET_SEARCH_FETCHING: 'SET_SEARCH_FETCHING',
  SET_SEARCH_MOVIES: 'SET_SEARCH_MOVIES',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_DEFAULT_DATA: 'SET_DEFAULT_DATA',
};

export const MOVIE_STORE_ACTION = {
  SET_MOVIE_FETCHING: 'SET_MOVIE_FETCHING',
  SET_MOVIE: 'SET_MOVIE'
};

export const USER_STORE_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
};

const makeActionCreator = ( type, data ) => ( { type, payload: data } );

export const setPopularMoviesData = ( payload ) => makeActionCreator( POPULARS_STORE_ACTIONS.SET_POPULARS, payload );

export const setTrendsData = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_TRENDS, payload );

export const setTrendsFetchingState = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_TRENDS_FETCHING, payload );

export const setTrendsCurrentPage = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_CURRENT_PAGE, payload );

export const setSearchMoviesData = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_SEARCH_MOVIES, payload );

export const setSearchFetchingState = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_SEARCH_FETCHING, payload );

export const setSearchCurrentPage = ( payload ) => makeActionCreator( SEARCH_STORE_ACTIONS.SET_CURRENT_PAGE, payload );

export const setSearchDefaultData = makeActionCreator( SEARCH_STORE_ACTIONS.SET_DEFAULT_DATA );

export const setMovieDetails = ( payload ) => makeActionCreator( MOVIE_STORE_ACTION.SET_MOVIE, payload );

export const setMovieFetchingState = ( payload ) => makeActionCreator( MOVIE_STORE_ACTION.SET_MOVIE_FETCHING, payload );

export const setPagination = ( { isSearch, fetching, page = 1 } ) => ( dispatch ) => {
  isSearch
    ? dispatch( setSearchCurrentPage( { fetching, page } ) )
    : dispatch( setTrendsCurrentPage( { fetching, page } ) );
};

export const resetSearchAndTrends = () => ( dispatch ) => {
  dispatch( setSearchDefaultData );
  dispatch( setTrendsCurrentPage( { fetching: false, page: 1 } ) );
}

export const setCurrentUser = ( payload ) => makeActionCreator( USER_STORE_ACTIONS.SET_CURRENT_USER, payload );