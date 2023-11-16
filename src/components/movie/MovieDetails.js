import { useDispatch } from 'react-redux';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { addToFavorites, removeFromFavorites } from 'store/effects';

import BookmarkIcon from 'components/BookmarkIcon';
import Label, { LABEL_VARIANTS } from 'components/Label';
import Genre from 'components/Genre';
import StarRating from 'components/StarRating';
import TableRow from './TableRow';

import styles from 'components/movie/Movie.module.scss';

const MovieDetails = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { id: movieId, isFavorite } = movieDetails;

  const addToFavoriteClickHandler = () => dispatch( addToFavorites( { movie: movieDetails } ) );

  const removeFromFavoriteClickHandler = () => dispatch( removeFromFavorites( { movieId } ) );

  return (
    <>
      <div className={ styles.movieReview__heading }>
        <h3 className={ styles.movieReview__title }>
          { movieDetails.title }
        </h3>

        <BookmarkIcon
          isMarked={ isFavorite }
          movieId={ movieId }
          onMark={ addToFavoriteClickHandler }
          onUnmark={ removeFromFavoriteClickHandler }
        />
      </div>

      <div className={ styles.movieReview__subheading }>
        <div className={ styles.movieReview__info }>

          { movieDetails.release_date && (
            <Label className={ styles.movieReview__release }>
              { movieDetails.release_date }
            </Label>
          ) }

          <div className={ styles.movieReview__genres }>

            { movieDetails.genres && (
              <Genre genres={ movieDetails.genres } variant={ LABEL_VARIANTS.plain } labeled />
            ) }
          </div>
        </div>

        { movieDetails.vote_average && <StarRating rating={ movieDetails.vote_average } /> }
      </div>

      <table className={ cn( styles.movieReview__table, styles.movieReview__section ) }>
        <tbody>
        { movieDetails.production_countries?.length > 0 && (
          <TableRow label={ t( 'Country' ) }>
            <ul>
              { movieDetails.production_countries.map( (el, index) => <li key={index}>{el.name}</li>) }
            </ul>
          </TableRow>
        ) }

        { movieDetails.tagline ? (
          <TableRow
            label={ t( 'Slogan' ) }
            className={ styles.movieReview__sloganDesc }
          >
            { movieDetails.tagline }
          </TableRow>
        ) : null }

        { movieDetails.runtime ? (
          <TableRow label={ t( 'Runtime' ) }>{ movieDetails.runtime }</TableRow>
        ) : null }

        { movieDetails.budget ? (
          <TableRow label={ t( 'Budget' ) }>$ { movieDetails.budget }</TableRow>
        ) : null }

        { movieDetails.homepage ? (
          <TableRow label={ t( 'Homepage' ) }>
            <a href={ movieDetails.homepage } target="_blank" rel="nofollow noreferrer">
              { movieDetails.homepage }
            </a>
          </TableRow>
        ) : null }

        { movieDetails.production_companies?.length > 0 && (
          <TableRow label={ t( 'Production companies' ) }>
            <ul className={styles.movieReview__company}>
              { movieDetails.production_companies.map( (el, index) => (
                <li key={ index } className={ styles.movieReview__companyItem }>{ el.name }</li>
              ) ) }
            </ul>
          </TableRow>
        ) }

        { movieDetails.overview ? (
          <TableRow label={ t( 'Overview' ) }>{ movieDetails.overview }</TableRow>
        ) : null }
        </tbody>
      </table>
    </>
  )
};

export default MovieDetails;