import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import Slider from 'components/Slider';
import Pagination from 'components/Pagination';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Label from 'components/Label';
import TrendcardsContainer from './TrendcardsContainer';

import {
  getMovieSearchResults,
  getMovieTrends,
  resetSearchAndTrends,
  setPagination
} from 'store/effects';

import {
  selectorPopularsState,
  selectorTrendsState,
  selectorSearchState
} from 'store/selectors';

import styles from 'components/layout/Layout.module.scss';

const sliderAutoplaySettings = {
  delay: 5000,
  pauseOnMouseEnter: true,
  disableOnInteraction: false
};

const sliderPaginationSettings = {
  clickable: true,
  bulletClass: 'swiper-pagination-bullet'
}

const Home = () => {
  const dispatch = useDispatch();

  const popularsState = useSelector( selectorPopularsState );
  const popularsFetching = popularsState.fetching;
  const popularMovies = popularsState.popularMovies;

  const trendsState = useSelector( selectorTrendsState );
  const trendsFetching = trendsState.fetching;
  const trends = trendsState.trends;
  const trendsCurrentPage = trendsState.currentPage;
  const trendsTotalResults = trendsState.totalResults;
  const trendsTotalPages = trendsState.totalPages;

  const searchState = useSelector( selectorSearchState );
  const searchCurrentPage = searchState.currentPage;
  const searchQuery = searchState.searchQuery;
  const isSearch = searchState.searchQuery?.length > 0;



  useEffect(() => {
    if( ! isSearch ) {
      dispatch( getMovieTrends( trendsCurrentPage ) );
    } else {
      dispatch( getMovieSearchResults({ searchQuery, currentPage: searchCurrentPage }) );
    }
    // eslint-disable-next-line
  }, [isSearch, searchCurrentPage, searchQuery, trendsCurrentPage]);

  const paginationClickHandler = ( page ) => {
    dispatch( setPagination( { isSearch, fetching: false, page } ) );
  };

  const clearSearchResults = () => {
    dispatch( resetSearchAndTrends( { isSearch, fetching: false, page: 1 } ) );
  };

  return (
    <>
      { popularsFetching && <Loader /> }

      { ! popularsFetching && popularMovies && (
        <Slider
          slides={ popularMovies }
          navigation
          autoplay={ sliderAutoplaySettings }
          pagination={ sliderPaginationSettings }
          className={ styles.sliderPopular }
          fetching={ popularsFetching }
        />
      ) }

      { ( trendsFetching || searchState.fetching ) && <Loader /> }

      { ! trendsFetching && ! searchState.fetching && (
        <div className={ styles.pageContainer }>
          <div className={ styles.headingContainer }>
            <h2 className={ cn( styles.pageHeading, styles['pageHeading--2'] ) }>
              { searchState.searchQuery?.length > 0 ? `Search results for "${ searchState.searchQuery }"` : 'Trending movies' }
            </h2>

            { searchState.searchedMovies?.length > 0 && searchState.searchQuery && (
              <Button onClick={ clearSearchResults }>
                <Label className={ styles.clearResultsBtn }>
                  Clear search results
                </Label>
              </Button>
            )}
          </div>

          { ( ( isSearch && searchState?.searchedMovies?.length > 0 ) || trends ) && (
            <div className={styles.container}>
              <TrendcardsContainer
                movies={ ( isSearch && searchState?.searchedMovies ) ? searchState.searchedMovies : !isSearch && trends && trends }
              />
            </div>
          ) }

          { ( trendsTotalResults > 20 || ( isSearch && searchState.totalResults > 20 ) ) && (
            <Pagination
              totalPages={ isSearch ? searchState.totalPages : trendsTotalPages }
              currentPage={ isSearch ? searchState.currentPage : trendsCurrentPage }
              onPageChange={ paginationClickHandler }
            />
          ) }
        </div>
      ) }
    </>
  )
};

export default Home;