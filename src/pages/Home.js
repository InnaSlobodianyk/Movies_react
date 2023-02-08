import React, { useEffect, useReducer } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import Slider from "components/Slider";
import Trendcard from "components/Trendcard";
import Pagination from "components/Pagination";

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

const initialState = {
  movies: [],
  totalResults: 0,
  currentPage: 1,
  totalPages: 0,
  popularMovies: []
};

const ACTIONS = {
  SUCCESS: 'success',
  SET_CURRENT_PAGE: 'setCurrentPage'
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.SUCCESS:
      return {
        ...state,
        movies: action.payload.movies.movies,
        totalResults: action.payload.movies.totalResults,
        currentPage: action.payload.movies.page,
        totalPages: action.payload.movies.totalPages,
        popularMovies: action.payload.populars
      };
    case ACTIONS.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    default:
      throw new Error();
  }
}

const Home = () => {
  const [state, dispatch] = useReducer( reducer, initialState );
  const { movies, totalResults, currentPage, totalPages, popularMovies } = state;

  useEffect(() => {
    getTrends(currentPage).then((response) => {
      dispatch( { type: ACTIONS.SUCCESS, payload: response } );
    });
  }, [currentPage]);

  return (
    <>
      { popularMovies && (
        <Slider
          slides={ popularMovies }
          navigation
          autoplay={ sliderAutoplaySettings }
          videos={ false }
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