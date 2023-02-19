import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";

import { getTrends } from "services/trends";
import { getSearchResults } from "services/searchResults";

import Slider from "components/Slider";
import Trendcard from "components/Trendcard";
import Pagination from "components/Pagination";
import Button from "components/Button";
import Loader from "components/Loader";
import Label from "components/Label";

import { STORE_ACTIONS } from "store";

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
      dispatch( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: false } );

      getSearchResults( searchQuery, currentPage ).then((response) => {
        response ? dispatch( { type: STORE_ACTIONS.SET_DATA, payload: response } ) : dispatch( { type: STORE_ACTIONS.GET_FAILURE } );

        dispatch( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: true } );
      });


    } else {
      getTrends(currentPage).then((response) => {
        response ? dispatch( { type: STORE_ACTIONS.SET_DATA, payload: response } ) : dispatch( { type: STORE_ACTIONS.GET_FAILURE } );

        dispatch({ type: STORE_ACTIONS.SET_LOADED_STATE, payload: true });
      });
    }
  }, [currentPage, dispatch, searchQuery, showSearchResults]);

  const paginationClickHandler = ( page ) => {
    dispatch( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: page } );

    dispatch( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: true } );
  };

  const clearSearchResults = ( e ) => {
    e.preventDefault();
    dispatch( { type: STORE_ACTIONS.SET_LOADED_STATE, payload: false } );

    dispatch( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: false } );
    dispatch( { type: STORE_ACTIONS.SEARCH_QUERY, payload: '' } );
    dispatch( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: 1 } );
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

export default Home;