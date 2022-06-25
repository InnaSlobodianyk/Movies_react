import styles from "./TrendcardsContainer.module.scss";
import Trendcard from "../Trendcard/Trendcard";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiRequestTrendsUrl, key } from "../../config";

const TrendcardsContainer = () => {
    const [movies, setMovies] = useState([]);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        const getTrends = async () => {
            const { data } = await axios(`${apiRequestTrendsUrl}?api_key=${key}&page=1&language=ru`);
            console.log('%c GET TRENDS' , 'background: red; color: #bada55');
            return data;
        }

        getTrends().then(data => {
            // console.log('%c In promise' , 'background: #222; color: #bada55');
            setMovies(data.results);
            setTotalPages(data.total_pages);

            // console.log('%c MOVIES' , 'background: #222; color: #bada55');
            // console.log(movies);
            //
            // console.log('%c TOTAL PAGES' , 'background: #222; color: #bada55');
            // console.log(totalPages);
        })
    }, []);

    return (
        <div className={styles.container}>

            { movies.map(movie => {
                // console.log('%c RENDER' , 'background: #222; color: #bada55');
                // console.log(movie);
                return <Trendcard key={movie.id} movie={movie} />;
            }) }
        </div>
    );
}

export default React.memo(TrendcardsContainer);