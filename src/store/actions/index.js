export const STORE_ACTIONS = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_DATA: 'SET_DATA',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SET_SEARCH: 'SET_SEARCH',
  RESET_SEARCH: 'RESET_SEARCH',
  SET_MOVIE_DETAILS: 'SET_MOVIE_DETAILS',
  SET_DEFAULT_DATA: 'SET_DEFAULT_DATA',
};

export const setMoviesData = ( data ) => ( { type: STORE_ACTIONS.SET_DATA, payload: data } );

export const setLoadedState = ( isLoaded ) => ( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: isLoaded } );

export const setCurrentPage = ( { loaded, page } ) => ( {
  type: STORE_ACTIONS.SET_CURRENT_PAGE,
  payload: {
    loaded,
    page
  }
} );

export const setSearch = ( { loaded, showSearchRes, query, page } ) => ( {
  type: STORE_ACTIONS.SET_SEARCH,
  payload: {
    loaded,
    showSearchRes,
    query,
    page
  }
} );

export const setMovieDetails = ( data ) => ( { type: STORE_ACTIONS.SET_MOVIE_DETAILS, payload: data } );

export const setDefaultData = () => ( { type: STORE_ACTIONS.SET_DEFAULT_DATA } );