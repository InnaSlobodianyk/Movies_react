import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Label, { LABEL_VARIANTS } from 'components/Label';
import Genre from 'components/Genre';
import StarRating from 'components/StarRating';

import { imageFullUrl } from 'helpers';

import styles from './PopularMovie.module.scss';

const PopularMovie = ( { movieDetails } ) => {
  const { t } = useTranslation();

  return (
    <div
      id={ movieDetails.id }
      className={ styles.popularMovieItem }
      style={ movieDetails.backdrop_path
        ? { backgroundImage: `url(${ imageFullUrl({ imagePath: movieDetails.backdrop_path } ) }` }
        : { backgroundColor: '#f5f6f6' } }
    >
      <div className={ styles.popularMovieHolder }>
        <h2 className={ styles.popularMovieTitle }>{ movieDetails.title }</h2>

        <div className={ styles.popularMovieInfo }>
          <div className={ styles.popularMovieRelease }>
            <Label variant='plain' >
              { movieDetails.release_date }
            </Label>
          </div>

          <Genre genres={ movieDetails.genres } variant={ LABEL_VARIANTS.plain } labeled />
        </div>

        <p className={ styles.popularMovieOverview }>{ movieDetails.overview }</p>

        <div className={ styles.popularMovieRating }>
          { movieDetails.vote_average && <StarRating rating={ movieDetails.vote_average } /> }
        </div>

        <Link to={`/movie/${ movieDetails.id }`} className={styles.popularMovieBtn}>
          <Label>
            { t( 'Details' ) }
          </Label>
        </Link>
      </div>
    </div>
  );
};

export default PopularMovie;