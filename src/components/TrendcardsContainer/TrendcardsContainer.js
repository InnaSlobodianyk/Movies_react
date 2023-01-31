import Trendcard from "components/Trendcard/Trendcard";

import styles from "./TrendcardsContainer.module.scss";

const TrendcardsContainer = ({ movies }) => {
  return (
    <div className={styles.container}>
      { movies.map( movie => <Trendcard key={movie.id} movie={movie}/> ) }
    </div>
  );
}

export default TrendcardsContainer;