import cn from "classnames";
import Card from "./Card";

import styles from "components/movie/Movie.module.scss";

const MoreMovies = ({ movies }) => {
  return (
    <ul className={ cn( styles.movieReview__moreMovies, styles.movieReview__scrollbar ) }>
      { movies.map( (item, index) => (
        <li key={ index } className={ styles.movieReview__moreMoviesItem }>
          <Card details={ item } />
        </li>
      )) }
    </ul>
  );
};

export default MoreMovies;