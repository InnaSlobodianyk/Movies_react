import { IoBookmarkOutline } from "react-icons/io5";
import cn from "classnames";

import Button from "components/Button";
import Label from "components/Label";
import Genre from "components/Genre";
import StarRating from "components/StarRating";

import styles from "components/movie/Movie.module.scss";

const MovieDetails = ({ movieDetails }) => (
  <>
    <div className={ styles.movieReview__heading }>
      <h3 className={ styles.movieReview__title }>
        { movieDetails.title }
      </h3>

      <Button data-hash={ movieDetails.id } className={ styles.movieReview__btnFavourite }>
        <IoBookmarkOutline />
      </Button>
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
        <tr>
          <td>Country</td>
          <td data-label="Country">
            <ul>
              { movieDetails.production_countries.map( (el, index) => <li key={index}>{el.name}</li>) }
            </ul>
          </td>
        </tr>
      ) }

      { movieDetails.tagline?.length > 0 && (
        <tr>
          <td>Slogan</td>
          <td className={ styles.movieReview__sloganDesc } data-label="Slogan">{ movieDetails.tagline }</td>
        </tr>
      ) }

      { movieDetails.runtime?.length > 0 && (
        <tr>
          <td>Runtime</td>
          <td data-label="Runtime">{ movieDetails.runtime }</td>
        </tr>
      ) }

      { movieDetails.budget?.length > 0 && (
        <tr>
          <td>Budget</td>
          <td data-label="Budget">$ { movieDetails.budget }</td>
        </tr>
      ) }

      { movieDetails.homepage?.length > 0 && (
        <tr>
          <td>Homepage</td>
          <td data-label="Homepage">
            <a href={ movieDetails.homepage } target="_blank" rel="nofollow noreferrer">
              { movieDetails.homepage }
            </a>
          </td>
        </tr>
      ) }

      { movieDetails.production_companies?.length > 0 && (
        <tr>
          <td>Production companies</td>
          <td data-label="Production companies">
            <ul className={styles.movieReview__company}>
              { movieDetails.production_companies.map( (el, index) => (
                <li key={ index } className={ styles.movieReview__companyItem }>{ el.name }</li>
              ) ) }
            </ul>
          </td>
        </tr>
      ) }

      { movieDetails.overview?.length > 0 && (
        <tr>
          <td>Overview</td>
          <td data-label="Overview">
            { movieDetails.overview }
          </td>
        </tr>
      ) }
      </tbody>
    </table>
  </>
);

export default MovieDetails;