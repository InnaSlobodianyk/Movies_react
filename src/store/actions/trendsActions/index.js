import { makeActionCreator } from 'store/actions';

export const TRENDS_STORE_ACTIONS = {
  SET_TRENDS_FETCHING: 'SET_TRENDS_FETCHING',
  SET_TRENDS: 'SET_TRENDS',
  SET_CURRENT_PAGE: 'SET_CURRENT_PAGE',
};

export const setTrendsData = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_TRENDS, payload );

export const setTrendsFetchingState = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_TRENDS_FETCHING, payload );

export const setTrendsCurrentPage = ( payload ) => makeActionCreator( TRENDS_STORE_ACTIONS.SET_CURRENT_PAGE, payload );