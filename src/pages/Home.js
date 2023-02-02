import React, { useEffect, useState } from "react";
import cn from "classnames";

import { getTrends } from "services/trends";

import Trendcard from "components/Trendcard/Trendcard";

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

      { movies && (
        <div className={styles.container}>
          { movies.map( movie => <Trendcard key={ movie.id } movie={ movie } /> ) }
        </div>
      ) }
    </>
  )
};

export default Home;