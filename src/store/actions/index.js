import { setTrendsCurrentPage } from './trendsActions';
import { setSearchCurrentPage, setSearchDefaultData } from './searchActions';

export const makeActionCreator = ( type, data ) => ( { type, payload: data } );

export const setPagination = ( { isSearch, fetching, page = 1 } ) => ( dispatch ) => {
  isSearch
    ? dispatch( setSearchCurrentPage( { fetching, page } ) )
    : dispatch( setTrendsCurrentPage( { fetching, page } ) );
};

export const resetSearchAndTrends = () => ( dispatch ) => {
  dispatch( setSearchDefaultData );
  dispatch( setTrendsCurrentPage( { fetching: false, page: 1 } ) );
}