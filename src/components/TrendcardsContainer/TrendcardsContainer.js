import styles from "./TrendcardsContainer.module.scss";
import Trendcard from "../Trendcard/Trendcard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiRequestTrendsUrl, key } from "../../config";

const TrendcardsContainer = () => {
    const [movies, setMovies] = useState([]);
    // const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getTrends = async () => {
            const { data } = await axios(`${apiRequestTrendsUrl}?api_key=${key}&page=1&language=ru`);
            console.log('%c GET TRENDS' , 'background: red; color: #bada55');
            return data;
        }

        getTrends().then(data => {
            setMovies(data.results);
            // setTotalPages(data.total_pages);
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

export default React.memo(TrendcardsContainer);