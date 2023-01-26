import { IoBookmarkOutline } from "react-icons/io5";
import cn from "classnames";

import {
  calcDate,
  formatRuntime,
  formatBudget,
  formatGenresArray,
  imageFullUrl
} from "helpers";

import Button from "components/Button/Button";
import Genre from "components/Genre/Genre";
import Label from "components/Label/Label";
import Card from "components/Card/Card";
import StarRating from "components/StarRating/StarRating";
import Slider from "components/Slider/Slider";

import imgPlaceholder from "assets/images/person.png";

import styles from "./Movie.module.scss";

const Movie = ({ movieDetails }, ...props) => {

  const runtime = formatRuntime(movieDetails.runtime);
  const budget = formatBudget(movieDetails.budget);
  const releaseDate = calcDate(movieDetails.release_date);
  const movieGenres = formatGenresArray(movieDetails.genres);

  return (
    <>
      <section className={ styles.movieReview__sectionIntro }>
        <div className={ styles.movieReview__sectionIntroInner }
             style={ movieDetails.backdrop_path
               ? { backgroundImage: `url(${ imageFullUrl({ imagePath: movieDetails.backdrop_path }) }` }
               : { backgroundColor: '#f5f6f6' } }></div>
      </section>

      <section className={ styles.movieReview }>
        <div className={ styles.movieReview__poster }>
          <figure className={ styles.movieReview__imgWrapper }>
            { movieDetails.poster_path && (
              <img src={ imageFullUrl({ imagePath: movieDetails.poster_path }) }
                   className={ styles.movieReview__img }
                   alt={ `Poster for ${movieDetails.title}` }
              />
            ) }
          </figure>
        </div>

        <div className={ styles.movieReview__content }>
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
                  { releaseDate }
                </Label>
              ) }

              <div className={ styles.movieReview__genres }>
                { movieDetails.genres && (
                  <Genre genres={ movieGenres } variant='plain' labeled />
                ) }
              </div>
            </div>

            { movieDetails.vote_average && <StarRating rating={ movieDetails.vote_average } />}
          </div>

          <table className={ cn( styles.movieReview__table, styles.movieReview__section ) }>
            <tbody>
            { movieDetails.production_countries?.length > 0 && (
              <tr>
                <td>Country</td>
                <td data-label="Country">
                  <ul>
                    { movieDetails.production_countries.map( (el, index) => {
                      return <li key={index}>{el.name}</li>;
                    }) }
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

            { runtime?.length > 0 && (
              <tr>
                <td>Runtime</td>
                <td data-label="Runtime">{ runtime }</td>
              </tr>
            ) }

            { budget?.length > 0 && (
              <tr>
                <td>Budget</td>
                <td data-label="Budget">$ { budget }</td>
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
                    { movieDetails.production_companies.map( (el, index) => {
                      return <li key={ index } className={ styles.movieReview__companyItem }>{ el.name }</li>;
                    } ) }
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
        </div>
      </section>

      <section>
        { movieDetails.videos?.results?.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>Watch trailer</h2>

            <Slider
              className={ styles.movieReview__sliderItem }
              slides={ movieDetails.videos.results }
              navigation={ true }
            />
          </div>
        ) }

        { movieDetails.credits?.cast?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>Actors</h2>

            <ul className={ cn( styles.movieReview__actorsWrapper, styles.movieReview__scrollbar ) }>
              { movieDetails.credits.cast.map( (item, index) => (
                <li key={ index } className={ styles.movieReview__actorsCard }>
                  <figure className={ styles.movieReview__actorsImgWrapper }>
                    <img src={ item.profile_path ? `${ imageFullUrl({ imagePath: item.profile_path }) }` : imgPlaceholder }
                         className={ styles.movieReview__actorsImg }
                         alt={ item.name } />
                  </figure>

                  <div className={ styles.movieReview__actorsDescription }>
                    <div className={ styles.movieReview__actorsName }>{ item.name }</div>
                    <div className={ styles.movieReview__actorsCharacter }>{ item.character }</div>
                  </div>
                </li>
              )) }
            </ul>
          </div>
        ) }

        { movieDetails.similar?.results?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>More similar movies</h2>

            <ul className={ cn( styles.movieReview__moreMovies, styles.movieReview__scrollbar ) }>
              { movieDetails.similar.results.map( (item, index) => (
                <li key={ index } className={ styles.movieReview__moreMoviesItem }>
                  <Card details={ item } />
                </li>
              )) }
            </ul>
          </div>
        ) }

        { movieDetails.recommendations?.results?.length > 0 && (
          <div className={ styles.movieReview__section }>
            <h2 className={ styles.movieReview__titleSecond }>Recommended movies</h2>

            <ul className={ cn( styles.movieReview__moreMovies, styles.movieReview__scrollbar ) }>
              { movieDetails.recommendations.results.map( (item, index) => (
                <li key={ index } className={ styles.movieReview__moreMoviesItem }>
                  <Card details={ item } />
                </li>
              )) }
            </ul>
          </div>
        ) }
      </section>
    </>
  );
}

export default Movie;