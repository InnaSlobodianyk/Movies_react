import { setTrendsCurrentPage } from './trendsActions';
import { setSearchCurrentPage, setSearchDefaultData } from './searchActions';
import { setFavoritesCurrentPage } from './favoritesActions';

export const PAGINATION_TYPE = {
  TRENDS: 'trends',
  SEARCH: 'search',
  FAVORITES: 'favorites',
  DEFAULT: 'default'
};

export const makeActionCreator = ( type, data ) => ( { type, payload: data } );

export const setPagination = ( { type, fetching, page = 1 } ) => ( dispatch ) => {
  const setCurrentPage = {
    [PAGINATION_TYPE.TRENDS]: dispatch( setTrendsCurrentPage( { fetching, page } ) ),
    [PAGINATION_TYPE.SEARCH]: dispatch( setSearchCurrentPage( { fetching, page } ) ),
    [PAGINATION_TYPE.FAVORITES]: dispatch( setFavoritesCurrentPage( { fetching, page } ) )
  };

  return setCurrentPage[type];
};

export const resetSearchAndTrends = () => ( dispatch ) => {
  dispatch( setSearchDefaultData() );
  dispatch( setTrendsCurrentPage( { fetching: false, page: 1 } ) );
}