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
  SET_SEARCH: 'SET_SEARCH',
  SET_SEARCH_MOVIES: 'SET_SEARCH_MOVIES',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_DEFAULT_DATA: 'SET_DEFAULT_DATA',
};

export const MOVIE_STORE_ACTION = {
  SET_MOVIE_FETCHING: 'SET_MOVIE_FETCHING',
  SET_MOVIE: 'SET_MOVIE'
};

export const setPopularMoviesData = ( { movies, fetching } ) => ( { type: POPULARS_STORE_ACTIONS.SET_POPULARS, payload: { movies, fetching } } );

export const setTrendsData = ( data ) => ( { type: TRENDS_STORE_ACTIONS.SET_TRENDS, payload: data } );

export const setSearchMoviesData = ( data ) => ( { type: SEARCH_STORE_ACTIONS.SET_SEARCH_MOVIES, payload: data } );

export const setFetchingState = ( { isSearch, isFetching } ) => (
  isSearch
    ? { type: SEARCH_STORE_ACTIONS.SET_SEARCH_FETCHING, payload: isFetching }
    : { type: TRENDS_STORE_ACTIONS.SET_TRENDS_FETCHING, payload: isFetching }
);

export const setCurrentPage = ( { isSearch, fetching, page } ) => (
  isSearch
    ? { type: SEARCH_STORE_ACTIONS.SET_CURRENT_PAGE, payload: { fetching, page } }
    : { type: TRENDS_STORE_ACTIONS.SET_CURRENT_PAGE, payload: { fetching, page } }
);

export const setSearch = ( { fetching, page, searchQuery } ) => ( {
  type: SEARCH_STORE_ACTIONS.SET_SEARCH,
  payload: {
    fetching,
    page,
    searchQuery
  }
} );

export const setMovieDetails = ( data ) => ( { type: MOVIE_STORE_ACTION.SET_MOVIE, payload: data } );

export const setMovieFetchingState = ( isFetching ) => ( { type: MOVIE_STORE_ACTION.SET_MOVIE_FETCHING, payload: isFetching } );

export const setDefaultData = () => ( { type: SEARCH_STORE_ACTIONS.SET_DEFAULT_DATA } );