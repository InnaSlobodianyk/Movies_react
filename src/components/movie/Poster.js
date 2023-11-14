import { useTranslation } from 'react-i18next';

import { imageFullUrl } from 'helpers';

import styles from 'components/movie/Movie.module.scss';

const Poster = ( { posterPath, movieTitle } ) => {
  const { t } = useTranslation();

  return (
    <figure className={ styles.movieReview__imgWrapper }>
      { posterPath && (
        <img src={ imageFullUrl( { imagePath: posterPath } ) }
             className={ styles.movieReview__img }
             alt={ `${ t( 'Poster for' ) } ${ movieTitle }` }
        />
      ) }
    </figure>
  );
};

export default Poster;