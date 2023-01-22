import React, { useEffect, useState } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import Trendcard from "components/Trendcard/Trendcard";
import { getPopulars } from "services/populars";

import Carousel from "components/Carousel/Carousel";

import styles from "components/layout/Layout.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getTrends().then((response) => {
      setMovies(response);
    });

    getPopulars().then((response) => {
      setPopularMovies(response);
    });
  }, []);

  return (
    <>
      { popularMovies && <Carousel slides={ popularMovies } /> }

      <div className={ styles.pageContainer }>
        <h2 className={ cn( styles.pageHeading, styles['pageHeading--2'] ) }>Trending movies</h2>

        { movies && (
          <div className={styles.container}>
            { movies.map( movie => <Trendcard key={ movie.id } movie={ movie } /> ) }
          </div>
        ) }
      </div>
    </>
  )
};

export default Home;