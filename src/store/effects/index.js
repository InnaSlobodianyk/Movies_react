import { getTrends } from 'services/trends';
import { getSearchResults } from 'services/searchResults';
import { getFailure, setLoadedState, setMoviesData } from '../actions';

export const getMovieTrends = ( currentPage ) => ( dispatch ) => {
  return getTrends(currentPage).then((response) => {
    response ? dispatch( setMoviesData(response) ) : dispatch( getFailure() );

    dispatch( setLoadedState(true) );
  });
};

export const getMovieSearchResults = ( { searchQuery, currentPage } ) => ( dispatch, getState ) => {
  dispatch( setLoadedState(false) );

  return getSearchResults( searchQuery, currentPage ).then((response) => {
    response ? dispatch( setMoviesData(response) ) : dispatch( getFailure() );

    dispatch( setLoadedState(true) );
  });
};