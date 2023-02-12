import React, { useEffect, useReducer } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import Slider from "components/Slider";
import Trendcard from "components/Trendcard";
import Pagination from "components/Pagination";

import { reducer, initialState, ACTIONS } from "./state";

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
  const [state, dispatch] = useReducer( reducer, initialState );
  const { movies, totalResults, currentPage, totalPages, popularMovies } = state;

  useEffect(() => {
    getTrends(currentPage).then((response) => {
      response ? dispatch( { type: ACTIONS.SET_DATA, payload: response } ) : dispatch( { type:ACTIONS.GET_FAILURE } );
    });
  }, [currentPage]);

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

      <div className={ styles.pageContainer }>
        <h2 className={ cn( styles.pageHeading, styles['pageHeading--2'] ) }>Trending movies</h2>

        { movies && (
          <div className={styles.container}>
            { movies.map( movie => <Trendcard key={ movie.id } movie={ movie } /> ) }
          </div>
        ) }

        { totalResults > 20 && (
          <Pagination
            totalPages={ totalPages }
            currentPage={ currentPage }
            onPageChange={ page => dispatch( { type: ACTIONS.SET_CURRENT_PAGE, payload: page } ) }
          />
        ) }
      </div>
    </>
  )
};

export default Home;