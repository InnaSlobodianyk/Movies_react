import { imageFullUrl } from "helpers";

import styles from "components/movie/Movie.module.scss";

const Poster = ({ posterPath, movieTitle }) => {
  return (
    <figure className={ styles.movieReview__imgWrapper }>
      { posterPath && (
        <img src={ imageFullUrl({ imagePath: posterPath }) }
             className={ styles.movieReview__img }
             alt={ `Poster for ${movieTitle}` }
        />
      ) }
    </figure>
  );
};

export default Poster;