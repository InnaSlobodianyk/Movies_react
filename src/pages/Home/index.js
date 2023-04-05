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
  getMovieTrends
} from 'store/effects';

import {
  selectorPopularsState,
  selectorTrendsState,
  selectorSearchState
} from 'store/selectors';

import {
  resetSearchAndTrends,
  setPagination
} from 'store/actions';

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

  const { fetching: popularsFetching, popularMovies } = useSelector( selectorPopularsState );

  const  {
    currentPage: trendsCurrentPage,
    fetching: trendsFetching,
    totalPages: trendsTotalPages,
    totalResults: trendsTotalResults,
    trends
  } = useSelector( selectorTrendsState );

  const {
    fetching: searchFetching,
    currentPage: searchCurrentPage,
    totalPages: searchTotalPages,
    totalResults: searchTotalResults,
    searchedMovies,
    searchQuery
  } = useSelector( selectorSearchState );

  const isSearch = searchQuery.length > 0;

  useEffect(() => {
    dispatch( getMovieTrends( trendsCurrentPage || 1 ) );
    // eslint-disable-next-line
  }, [trendsCurrentPage]);

  const isPaginationVisible = isSearch ? searchTotalResults > 20 : trendsTotalResults > 20;

  const trendsPaginationClickHandler = ( page ) => {
    dispatch( setPagination( { isSearch, fetching: false, page } ) );
  };

  const searchPaginationClickHandler = ( page ) => {
    dispatch( getMovieSearchResults( { searchQuery, currentPage: page } ) );
  };

  const clearSearchResults = () => {
    dispatch( resetSearchAndTrends() );
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

      { ( trendsFetching || searchFetching ) && <Loader /> }

      { ! trendsFetching && ! searchFetching && (
        <div className={ styles.pageContainer }>
          <div className={ styles.headingContainer }>
            <h2 className={ cn( styles.pageHeading, styles['pageHeading--2'] ) }>
              { isSearch ? `Search results for "${ searchQuery }"` : 'Trending movies' }
            </h2>

            { searchQuery && (
              <Button onClick={ clearSearchResults }>
                <Label className={ styles.clearResultsBtn }>
                  Clear search results
                </Label>
              </Button>
            ) }
          </div>

          {
            isSearch && ! searchedMovies.length
              ? <div>Nothing was found for your request</div>
              : (
                <div className={styles.container}>
                  <TrendcardsContainer movies={ isSearch ? searchedMovies : trends } />
                </div>
              )
          }

          { isPaginationVisible && (
            <Pagination
              totalPages={ isSearch ? searchTotalPages : trendsTotalPages }
              currentPage={ isSearch ? searchCurrentPage : trendsCurrentPage }
              onPageChange={ isSearch ? searchPaginationClickHandler : trendsPaginationClickHandler }
            />
          ) }
        </div>
      ) }
    </>
  )
};

export default Home;