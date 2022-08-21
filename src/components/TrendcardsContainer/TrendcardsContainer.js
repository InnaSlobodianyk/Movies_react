import React, { useEffect, useState } from "react";
import { getTrends } from "services/trends";

import Trendcard from "components/Trendcard/Trendcard";

import styles from "./TrendcardsContainer.module.scss";

const TrendcardsContainer = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getTrends()
          .then((response) => {
              setMovies(response.results);
          })
    }, []);

    return (
        <div className={styles.container}>
            { movies.map(movie => {
                return <Trendcard key={movie.id} movie={movie} />;
            }) }
        </div>
    );
}

export default TrendcardsContainer;