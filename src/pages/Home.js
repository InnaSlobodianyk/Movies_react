import React, { useEffect, useState } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";
import { getAllGenres } from "services/genres";

import TrendcardsContainer from "components/TrendcardsContainer/TrendcardsContainer";

import styles from "components/layout/Layout.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    getTrends().then((response) => {
      setMovies(response);
    });

    getAllGenres().then((response) => {
      setAllGenres(response);
    });
  }, []);

  return (
    <>
      <h2 className={cn(styles.pageHeading, styles['pageHeading--2'])}>Trending movies</h2>

      { movies && allGenres && <TrendcardsContainer movies={ movies } genres={ allGenres } /> }
    </>
  )
};

export default Home;