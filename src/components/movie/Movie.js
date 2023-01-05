import { useEffect, useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import cn from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import 'swiper/css/navigation';

import { imageUrl } from "config";
import { getMovie } from "services/movie";
import { calcDate, formatRuntime, formatBudget, formatGenresArray, getWindowSize, imageFullUrl } from "helpers/helpers";

import Button from "components/Button/Button";
import Genre from "components/Genre/Genre";
import Label from "components/Label/Label";
import Card from "components/Card/Card";
import StarRating from "components/StarRating/StarRating";

import styles from "./Movie.module.scss";

const Movie = ({ movieId }, ...props) => {
  const [movieDetails, setMovieDetails] = useState([]);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        setMovieDetails(response);
      })
  }, [movieId]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  const runtime = formatRuntime(movieDetails.runtime);
  const budget = formatBudget(movieDetails.budget);
  const releaseDate = calcDate(movieDetails.release_date);

  const movieGenres = formatGenresArray(movieDetails.genres);

  return (
    <>
      {windowSize.innerWidth >= 768 && (
        <section className={styles.movieReview__sectionIntro}>
          <div className={styles.movieReview__sectionIntroInner}
               style={{backgroundImage: movieDetails.backdrop_path && `url(${imageFullUrl(imageUrl, movieDetails.backdrop_path)}`}}></div>
        </section>
      )}

      <section className={styles.movieReview}>
        <div className={styles.movieReview__poster}>
          <figure className={styles.movieReview__imgWrapper}>
            <img src={movieDetails.poster_path && `${imageUrl}/${movieDetails.poster_path}`}
                 className={styles.movieReview__img}
                 alt={`Poster for ${movieDetails.title}`}
            />
          </figure>
        </div>

        <div className={styles.movieReview__content}>
          <div className={styles.movieReview__heading}>
            <h3 className={styles.movieReview__title}>
              {movieDetails.title}
            </h3>
            <Button data-hash={movieId} className={styles.movieReview__btnFavourite}>
              <IoBookmarkOutline />
            </Button>
          </div>

          <div className={styles.movieReview__subheading}>
            <div className={styles.movieReview__info}>
              {movieDetails.release_date && (
                <Label className={styles.movieReview__release}>
                  {releaseDate}
                </Label>
              )}

              <div className={styles.movieReview__genres}>
                {movieDetails.genres && (
                  <Genre genres={movieGenres} variant='plain' labeled />
                )}
              </div>
            </div>

            {movieDetails.vote_average && <StarRating rating={movieDetails.vote_average} />}
          </div>

          <table className={cn(styles.movieReview__table, styles.movieReview__section)}>
            <tbody>
            {movieDetails.production_countries && movieDetails.production_countries.length > 0 && (
              <tr>
                <td>Country</td>
                <td data-label="Country">
                  <ul>
                    {movieDetails.production_countries.map( (el, index) => {
                      return <li key={index}>{el.name}</li>;
                    })}
                  </ul>
                </td>
              </tr>
            )}

            {movieDetails.tagline && movieDetails.tagline.length > 0 && (
              <tr>
                <td>Slogan</td>
                <td className={styles.movieReview__sloganDesc} data-label="Slogan">{movieDetails.tagline}</td>
              </tr>
            )}

            {runtime && runtime.length > 0 && (
              <tr>
                <td>Runtime</td>
                <td data-label="Runtime">{runtime}</td>
              </tr>
            )}

            {budget && budget.length > 0 && (
              <tr>
                <td>Budget</td>
                <td data-label="Budget">$ {budget}</td>
              </tr>
            )}

            {movieDetails.homepage && movieDetails.homepage.length > 0 &&(
              <tr>
                <td>Homepage</td>
                <td data-label="Homepage">
                  <a href={movieDetails.homepage} target="_blank" rel="nofollow noreferrer">
                    {movieDetails.homepage}
                  </a>
                </td>
              </tr>
            )}

            {movieDetails.production_companies && movieDetails.production_companies.length > 0 && (
              <tr>
                <td>Production companies</td>
                <td data-label="Production companies">
                  <ul className={styles.movieReview__company}>
                    {movieDetails.production_companies.map( (el, index) => {
                      return <li key={index} className={styles.movieReview__companyItem}>{el.name}</li>;
                    })}
                  </ul>
                </td>
              </tr>
            )}

            {movieDetails.overview && movieDetails.overview.length > 0 && (
              <tr>
                <td>Overview</td>
                <td data-label="Overview">
                  {movieDetails.overview}
                </td>
              </tr>
            )}
            </tbody>
          </table>
        </div>
      </section>

      <section>
        {movieDetails.videos?.results && movieDetails.videos.results.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>Watch trailer</h2>

            <Swiper navigation={true} modules={[Navigation]}>
              {movieDetails.videos.results.map((item) => (
                <SwiperSlide key={item.key} className={styles.movieReview__sliderItem}>
                  <iframe width='560' height='315' src={`https://www.youtube.com/embed/${item.key}`} frameBorder='0'
                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                          allowFullScreen title={item.name}></iframe>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )}

        {movieDetails.credits?.cast && movieDetails.credits.cast.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>Actors</h2>

            <ul className={cn(styles.movieReview__actorsWrapper, styles.movieReview__scrollbar)}>
              {movieDetails.credits.cast.map((item, index) => (
                <li key={index} className={styles.movieReview__actorsCard}>
                  <figure className={styles.movieReview__actorsImgWrapper}>
                    <img src={item.profile_path && `${imageUrl}/${item.profile_path}`}
                         className={styles.movieReview__actorsImg} alt="" />
                  </figure>

                  <div className={styles.movieReview__actorsDescription}>
                    <div className={styles.movieReview__actorsName}>{item.name}</div>
                    <div className={styles.movieReview__actorsCharacter}>{item.character}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {movieDetails.similar?.results && movieDetails.similar.results.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>More similar movies</h2>

            <ul className={cn(styles.movieReview__moreMovies, styles.movieReview__scrollbar)}>
              {movieDetails.similar.results.map((item, index) => (
                <li key={index} className={styles.movieReview__moreMoviesItem}>
                  <Card props={item} />
                </li>
              ))}
            </ul>
          </div>
        )}

        {movieDetails.recommendations?.results && movieDetails.recommendations.results.length > 0 && (
          <div className={styles.movieReview__section}>
            <h2 className={styles.movieReview__titleSecond}>Recommended movies</h2>

            <ul className={cn(styles.movieReview__moreMovies, styles.movieReview__scrollbar)}>
              {movieDetails.recommendations.results.map((item, index) => (
                <li key={index} className={styles.movieReview__moreMoviesItem}>
                  <Card props={item} />
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </>
  );
}

export default Movie;