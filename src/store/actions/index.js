export const STORE_ACTIONS = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_DATA: 'SET_DATA',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  SHOW_SEARCH_RESULTS: 'SHOW_SEARCH_RESULTS',
  SET_MOVIE_DETAILS: 'SET_MOVIE_DETAILS',
  SET_DEFAULT_DATA: 'SET_DEFAULT_DATA',
};

export const setMoviesData = ( data ) => ( { type: STORE_ACTIONS.SET_DATA, payload: data } );

export const setLoadedState = ( isLoaded ) => ( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: isLoaded } );

export const setCurrentPage = ( page ) => ( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: page } );

export const setSearchResultsShow = ( showSearchRes ) => ( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: showSearchRes } );

export const setMovieDetails = ( data ) => ( { type: STORE_ACTIONS.SET_MOVIE_DETAILS, payload: data } );

export const setDefaultData = () => ( { type: STORE_ACTIONS.SET_DEFAULT_DATA } );