import { useDispatch } from 'react-redux';
import { IoBookmark, IoBookmarkOutline } from 'react-icons/io5';
import cn from 'classnames';

import { addToFavorites, removeFromFavorites } from 'store/effects';

import Button from 'components/Button';
import Label from 'components/Label';
import Genre from 'components/Genre';
import StarRating from 'components/StarRating';
import TableRow from './TableRow';

import styles from 'components/movie/Movie.module.scss';

const MovieDetails = ({ movieDetails }) => {
  const dispatch = useDispatch();
  const { id: movieId, isFavorite } = movieDetails;

  const addToFavoriteClickHandler = () => dispatch( addToFavorites( { movie: movieDetails } ) );

  const removeFromFavoriteClickHandler = () => dispatch( removeFromFavorites( { movieId } ) );

  return (
    <>
      <div className={ styles.movieReview__heading }>
        <h3 className={ styles.movieReview__title }>
          { movieDetails.title }
        </h3>

        { isFavorite ? (
          <Button className={ styles.movieReview__btnFavourite } data-hash={ movieId } onClick={ removeFromFavoriteClickHandler }>
            <IoBookmark />
          </Button>
        ) : (
          <Button data-hash={ movieId } className={ styles.movieReview__btnFavourite } onClick={ addToFavoriteClickHandler }>
            <IoBookmarkOutline />
          </Button>
        ) }
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
              <Genre genres={ movieDetails.genres } variant='plain' labeled />
            ) }
          </div>
        </div>

        { movieDetails.vote_average && <StarRating rating={ movieDetails.vote_average } /> }
      </div>

      <table className={ cn( styles.movieReview__table, styles.movieReview__section ) }>
        <tbody>
        { movieDetails.production_countries?.length > 0 && (
          <TableRow label='Country'>
            <ul>
              { movieDetails.production_countries.map( (el, index) => <li key={index}>{el.name}</li>) }
            </ul>
          </TableRow>
        ) }

        { movieDetails.tagline ? (
          <TableRow
            label='Slogan'
            className={ styles.movieReview__sloganDesc }
          >
            { movieDetails.tagline }
          </TableRow>
        ) : null }

        { movieDetails.runtime ? (
          <TableRow label='Runtime'>{ movieDetails.runtime }</TableRow>
        ) : null }

        { movieDetails.budget ? (
          <TableRow label='Budget'>$ { movieDetails.budget }</TableRow>
        ) : null }

        { movieDetails.homepage ? (
          <TableRow label='Homepage'>
            <a href={ movieDetails.homepage } target="_blank" rel="nofollow noreferrer">
              { movieDetails.homepage }
            </a>
          </TableRow>
        ) : null }

        { movieDetails.production_companies?.length > 0 && (
          <TableRow label='Production companies'>
            <ul className={styles.movieReview__company}>
              { movieDetails.production_companies.map( (el, index) => (
                <li key={ index } className={ styles.movieReview__companyItem }>{ el.name }</li>
              ) ) }
            </ul>
          </TableRow>
        ) }

        { movieDetails.overview ? (
          <TableRow label='Overview'>{ movieDetails.overview }</TableRow>
        ) : null }
        </tbody>
      </table>
    </>
  )
};

export default MovieDetails;