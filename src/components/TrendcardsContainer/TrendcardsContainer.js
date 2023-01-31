import Trendcard from "components/Trendcard/Trendcard";

import styles from "./TrendcardsContainer.module.scss";

const TrendcardsContainer = ({ movies, genres }) => {
  return (
    <div className={styles.container}>
      { movies.map( movie => <Trendcard key={ movie.id } movie={ movie } genres={ genres } /> ) }
    </div>
  );
}

export default TrendcardsContainer;