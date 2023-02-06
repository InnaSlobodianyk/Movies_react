import React, { useEffect, useState } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import Slider from "components/Slider/Slider";
import Trendcard from "components/Trendcard/Trendcard";
import Pagination from "components/Pagination/Pagination";

import styles from "components/layout/Layout.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTrends(currentPage).then((response) => {
      setMovies(response.movies.movies);
      setCurrentPage(response.movies.page);
      setTotalResults(response.movies.totalResults);
      setTotalPages(response.movies.totalPages);
      setPopularMovies(response.populars);
    });
  }, [currentPage]);

  return (
    <>
      { popularMovies && (
        <Slider
          slides={ popularMovies }
          navigation
          autoplay={ { delay: 5000, pauseOnMouseEnter: true } }
          videos={ false }
          pagination={{
            clickable: true,
            bulletClass: 'swiper-pagination-bullet'
          }}
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
            onPageChange={ page => setCurrentPage(page) }
          />
        ) }
      </div>
    </>
  )
};

export default Home;