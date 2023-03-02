export const STORE_ACTIONS = {
  SET_LOADED_STATE: 'SET_LOADED_STATE',
  SET_DATA: 'SET_DATA',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
  GET_FAILURE: 'GET_FAILURE',
  SHOW_SEARCH_RESULTS: 'SHOW_SEARCH_RESULTS',
  SET_SEARCH_QUERY: 'SET_SEARCH_QUERY',
};

export const setMoviesData = ( data ) => ( { type: STORE_ACTIONS.SET_DATA, payload: data } );

export const getFailure = () => ( { type: STORE_ACTIONS.GET_FAILURE } );

export const setLoadedState = ( isLoaded ) => ( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: isLoaded } );

export const setCurrentPage = ( page ) => ( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: page } );

export const setSearchResultsShow = ( showSearchRes ) => ( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: showSearchRes } );

export const setSearchQuery = ( query ) => ( { type: STORE_ACTIONS.SET_SEARCH_QUERY, payload: query } );