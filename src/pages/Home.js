import React, { useEffect, useState } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import TrendcardsContainer from "components/TrendcardsContainer/TrendcardsContainer";

import styles from "components/layout/Layout.module.scss";

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrends().then((response) => {
      setMovies(response);
    });
  }, []);

  return (
    <>
      <h2 className={cn(styles.pageHeading, styles['pageHeading--2'])}>Trending movies</h2>

      { movies && <TrendcardsContainer movies={ movies } /> }
    </>
  )
};

export default Home;