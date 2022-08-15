import React, { useEffect, useState } from "react";
import { apiRequestTrendsUrl, key } from "../../config";
import { sendRequest } from "../../service/apiService";

import Trendcard from "../Trendcard/Trendcard";

import styles from "./TrendcardsContainer.module.scss";

const TrendcardsContainer = () => {
    const [movies, setMovies] = useState([]);

    const getTrends = async () => {
        return await sendRequest(`${apiRequestTrendsUrl}?api_key=${key}&page=1&language=ru`);
    }

    useEffect(() => {
        getTrends()
          .then((response) => {
              const trendsResponse = response.data;
              setMovies(trendsResponse.results);
          })
          .catch((error) => {
              console.log(error);
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