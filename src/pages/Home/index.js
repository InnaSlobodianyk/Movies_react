import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import Slider from "components/Slider";
import Trendcard from "components/Trendcard";
import Pagination from "components/Pagination";
import Button from "components/Button";
import Loader from "components/Loader";
import Label from "components/Label";

import {
  getMovieSearchResults,
  getMovieTrends,
  setCurrentPage,
  setLoadedState,
  setSearchResultsShow,
  setSearchQuery,
} from "store";

import styles from "components/layout/Layout.module.scss";

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
  const loaded = useSelector( state => state.loaded );
  const movies = useSelector( state => state.movies );
  const totalResults = useSelector( state => state.totalResults );
  const currentPage = useSelector( state => state.currentPage );
  const totalPages = useSelector( state => state.totalPages );
  const popularMovies = useSelector( state => state.popularMovies );
  const showSearchResults = useSelector( state => state.showSearchResults );
  const searchQuery = useSelector( state => state.searchQuery );


  useEffect(() => {
    if( showSearchResults ) {
      dispatch( getMovieSearchResults({ searchQuery, currentPage }) );
    } else {
      dispatch( getMovieTrends(currentPage) );
    }
  }, [currentPage, dispatch, searchQuery, showSearchResults]);

  const paginationClickHandler = ( page ) => {
    dispatch( setCurrentPage(page) );
    dispatch( setLoadedState(true) );
  };

  const clearSearchResults = ( e ) => {
    e.preventDefault();

    dispatch( setLoadedState(false) );
    dispatch( setSearchResultsShow(false) );
    dispatch( setSearchQuery('') );
    dispatch( setCurrentPage(1) );
  };

  return (
    <>
      { popularMovies && (
        <Slider
          slides={ popularMovies }
          navigation
          autoplay={ sliderAutoplaySettings }
          pagination={ sliderPaginationSettings }
          className={ styles.sliderPopular }
        />
      ) }

      { ! loaded && <Loader /> }

      { loaded && (
        <div className={ styles.pageContainer }>
          <div className={ styles.headingContainer }>
            <h2 className={ cn( styles.pageHeading, styles['pageHeading--2'] ) }>
              { showSearchResults && searchQuery ? `Search results for "${ searchQuery }"` : 'Trending movies' }
            </h2>

            { showSearchResults && searchQuery && (
              <Button onClick={ clearSearchResults }>
                <Label>
                  Clear search results
                </Label>
                </Button>
            )}
          </div>

          { movies && (
            <div className={styles.container}>
              { movies.map( movie => <Trendcard key={ movie.id } movie={ movie } /> ) }
            </div>
          ) }

          { totalResults > 20 && (
            <Pagination
              totalPages={ totalPages }
              currentPage={ currentPage }
              onPageChange={ paginationClickHandler }
            />
          ) }
        </div>
      ) }
    </>
  )
};

const mapStateToProps = ( state ) => {
  return {
    movies: state.movies,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalResults: state.totalResults,
    popularMovies: state.popularMovies,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps, {
  getMovieTrends, getMovieSearchResults, setCurrentPage,
  setLoadedState, setSearchResultsShow, setSearchQuery
})(Home);