import { useEffect, useState } from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import cn from "classnames";

import { imageUrl } from "config";
import { getMovie } from "services/movie";
import { calcDate, formatRuntime, formatBudget} from "helpers/helpers";

import Button from "components/Button/Button";
import Genre from "components/Genre/Genre";
import Label from "components/Label/Label";
import Card from "components/Card/Card";

import styles from "./Movie.module.scss";
import {Link} from "react-router-dom";


// const imageFullUrl = ( imageUrl, imagePath ) => {
//   console.log('%c imageFullUrl' , 'background: #222; color: #bada55');
//   console.log(imageUrl);
//   console.log(imagePath);
//   if(imagePath === null) {
//     return ` `;
//   }else {
//     return `${imageUrl+imagePath}`;
//   }
// };

const Movie = ({ movieId }, ...props) => {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        setMovieDetails(response);
      })
  }, [movieId]);

  console.log(movieDetails);
  console.log(movieDetails.genres);

  const genreStyles = cn(styles.movieReview__genres, props.className);
  const runtime = formatRuntime(movieDetails.runtime);
  const budget = formatBudget(movieDetails.budget);
  const releaseDate = calcDate(movieDetails.release_date);
  console.log('%c BUDGET' , 'background: #222; color: #bada55');
  console.log(budget);

  return (
    <>
      {/*<section className="section__intro section__movie"*/}
      {/*         style={{backgroundImage: 'http://image.tmdb.org/t/p/original/27Mj3rFYP3xqFy7lnz17vEd8Ms.jpg'}} />*/}

      <section className={styles.movieReview}>
        <div className={styles.movieReview__poster}>
          <figure className={styles.movieReview__imgWrapper}>
            {/*<img src="http://image.tmdb.org/t/p/original/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg"*/}
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
            <Button data-hash={movieId}>
              <IoBookmarkOutline />
            </Button>
            {/*<a href="#" className="movieReview__icon favorites-icon" data-hash="725201">*/}
            {/*  <i className="fa fa-bookmark-o" />*/}
            {/*</a>*/}
          </div>

          <div className={styles.movieReview__subheading}>
            <div className={styles.movieReview__info}>
              {movieDetails.release_date && (
                <Label className={styles.movieReview__release}>
                  {releaseDate}
                </Label>
              )}
              {/*<ul className={styles.movieReview__genres}>*/}
                {movieDetails.genres && (
                  <Genre className={genreStyles} genres={movieDetails.genres} />
                )}
              {/*</ul>*/}
              {/*<ul className={styles.movieReview__genres}>*/}
              {/*  <li className={styles.movieReview__genresItem}>Action</li>*/}
              {/*  <li className={styles.movieReview__genresItem}>Thriller</li>*/}
              {/*</ul>*/}
            </div>

            <div className="movieReview__rating rating">
              <div className="rating__wrapper">
                <div className="rating__base">
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                  <i className="fa fa-star-o" />
                </div>
                <div className="rating__active" style={{width: '69.71%'}}>
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                  <i className="fa fa-star" />
                </div>
              </div>

              <span className={styles.movieReview__ratingValue}>{movieDetails.vote_average}</span>
            </div>
          </div>

          <table className={cn(styles.movieReview__table, styles.movieReview__section)}>
            <tbody>
            {movieDetails.production_countries && (
              <tr>
                <td>Country</td>
                <td className={styles.movieReview__countryDesc} data-label="Country">
                  <ul className={styles.movieReview__country}>
                    {movieDetails.production_countries.map( (el, index) => {
                      return <li key={index} className={styles.movieReview__countryItem}>{el.name}</li>;
                    })}
                  </ul>
                </td>
              </tr>
            )}

            {movieDetails.tagline && (
              <tr>
                <td>Slogan</td>
                <td className={styles.movieReview__sloganDesc} data-label="Slogan">{movieDetails.tagline}</td>
              </tr>
            )}

            {runtime && (
              <tr>
                <td>Runtime</td>
                <td data-label="Runtime">
                  <div className={styles.movieReview__runtime}><span>{runtime}</span></div>
                </td>
              </tr>
            )}

            {budget && (
              <tr>
                <td>Budget</td>
                <td className={styles.movieReview__budgetDesc} data-label="Budget">{budget}</td>
              </tr>
            )}

            {movieDetails.homepage && (
              <tr>
                <td>Homepage</td>
                <td className={styles.movieReview__homepageDesc} data-label="Homepage">
                  <a href={movieDetails.homepage} target="_blank" rel="nofollow noreferrer">
                    {movieDetails.homepage}
                  </a>
                </td>
              </tr>
            )}

            {movieDetails.production_companies && (
              <tr>
                <td>Production companies</td>
                <td className={styles.movieReview__companyDesc} data-label="Production companies">
                  <ul className={styles.movieReview__company}>
                    {movieDetails.production_companies.map( (el, index) => {
                      return <li key={index} className={styles.movieReview__companyItem}>{el.name}</li>;
                    })}
                  </ul>
                </td>
              </tr>
            )}

            {movieDetails.overview && (
              <tr>
                <td>Overview</td>
                <td className={styles.movieReview__overviewDesc} data-label="Overview">
                  {movieDetails.overview}
                </td>
              </tr>
            )}
            </tbody>
          </table>

          <div className={cn(styles.movieReview__trailer, styles.movieReview__section)}>
            <h2 className={styles.movieReview__titleSecond}>Watch trailer</h2>
            {/*<div className="swiper-container swiper-container-initialized swiper-container-horizontal">*/}
            {/*  <div className="swiper-wrapper"*/}
            {/*       style="transition-duration: 0ms; transform: translate3d(-1007px, 0px, 0px);">*/}
            {/*    <div className="movieReview__trailer-item swiper-slide swiper-slide-duplicate swiper-slide-prev"*/}
            {/*         data-swiper-slide-index="9" style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/BmllggGO4pM" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    /!*Slides*!/*/}
            {/*    <div className="movieReview__trailer-item swiper-slide swiper-slide-active"*/}
            {/*         data-swiper-slide-index="0" style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/Anp4SdWoyqM" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide swiper-slide-next"*/}
            {/*         data-swiper-slide-index="1" style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/fBpdF_Vrh40" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="2"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/D346arxIYBk" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="3"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/6q93pzTw2rY" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="4"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/OryyR6ad2rQ" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="5"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/Fnsb3VuBms8" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="6"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/pfLY_2f44pc" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="7"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/3TPv-NQObhI" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide" data-swiper-slide-index="8"*/}
            {/*         style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/POLixFkmK9A" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div className="movieReview__trailer-item swiper-slide swiper-slide-duplicate-prev"*/}
            {/*         data-swiper-slide-index="9" style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/BmllggGO4pM" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*    <div*/}
            {/*      className="movieReview__trailer-item swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"*/}
            {/*      data-swiper-slide-index="0" style="width: 1007px;">*/}
            {/*      <iframe width="560" height="315" src="https://www.youtube.com/embed/Anp4SdWoyqM" frameBorder="0"*/}
            {/*              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
            {/*              allowFullScreen=""></iframe>*/}
            {/*    </div>*/}
            {/*  </div>*/}

            {/*  <div className="swiper-button-prev" tabIndex="0" role="button" aria-label="Previous slide"></div>*/}
            {/*  <div className="swiper-button-next" tabIndex="0" role="button" aria-label="Next slide"></div>*/}
            {/*  <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>*/}
          </div>

          {/*{movieDetails.credits.cast && (*/}
          {/*  <div className={cn(styles.movieReview__actors, styles.movieReview__section)}>*/}
          {/*    <h2 className={styles.movieReview__titleSecond}>Actors</h2>*/}

          {/*    <ul className={styles.movieReview__actorsWrapper}>*/}
          {/*      {movieDetails.credits.cast.map((item, index) => (*/}
          {/*        <li key={index} className={styles.movieReview__actorsCard}>*/}
          {/*          <figure className={styles.movieReview__actorsImgWrapper}>*/}
          {/*            <img src={item.profile_path && `${imageUrl}/${item.profile_path}`}*/}
          {/*                 className={styles.movieReview__actorsImg} alt="" />*/}
          {/*          </figure>*/}

          {/*          <div className={styles.movieReview__actorsDescription}>*/}
          {/*            <div className={styles.movieReview__actorsName}>{item.name}</div>*/}
          {/*            <div className={styles.movieReview__actorsCharacter}>{item.character}</div>*/}
          {/*          </div>*/}
          {/*        </li>*/}
          {/*      ))}*/}
          {/*    </ul>*/}
          {/*  </div>*/}
          {/*)}*/}

          {movieDetails.similar?.results && (
            <div className={cn(styles.movieReview__similar, styles.movieReview__section)}>
              <h2 className={styles.movieReview__titleSecond}>More similar movies</h2>

              <ul className={cn(styles.movieReview__similarWrapper)}>
                {movieDetails.similar.results.map((item, index) => (
                  <li key={index} className={styles.movieReview__similarCard}>
                    <Card props={item} />
                    {/*<figure className={styles.movieReview__similarImgWrapper}>*/}
                    {/*  <img src={item.poster_path && `${imageUrl}/${item.poster_path}`}*/}
                    {/*       className={styles.movieReview__similarImg} alt="" />*/}
                    {/*  /!*"http://image.tmdb.org/t/p/original/aHzdMSKwq9ucnP2yXl5zYIfKgGl.jpg"*!/*/}

                    {/*  {item.genre_ids && (*/}
                    {/*    <figcaption className={styles.movieReview__similarCaption}>*/}
                    {/*      <Genre className={cn(genreStyles, styles.movieReview__similarGenres)} genres={item.genre_ids} />*/}
                    {/*    </figcaption>*/}
                    {/*  )}*/}


                    {/*    /!*<ul className={styles.movieReview__similarGenres}>*!/*/}
                    {/*    /!*  <li>Romance</li>*!/*/}
                    {/*    /!*  <li>Comedy</li>*!/*/}
                    {/*    /!*</ul>*!/*/}

                    {/*</figure>*/}

                    {/*<div className={styles.movieReview__similarDescription}>*/}
                    {/*  <Link to={`/movie/${item.id}`} className={styles.movieReview__similarLink}>*/}
                    {/*    <div className={styles.movieReview__similarTitle}>{item.title}</div>*/}
                    {/*  </Link>*/}

                    {/*  <div className={styles.movieReview__similarContent}>*/}
                    {/*    <div className={styles.movieReview__similarRelease}>2015</div>*/}

                    {/*    <div className="movieReview__rating-value movie-review__rating-value--sm movie-review__similar-rate">*/}
                    {/*      6.8*/}
                    {/*    </div>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="movieReview__recommend movie-review__section"><h2
            className="movieReview__title-second">Recommended movies</h2>
            <ul className="movieReview__recommend-wrapper scrollbar">
              <li className="movieReview__recommend-card">
                <figure className="movieReview__recommend-img-wrapper">
                  <img src="http://image.tmdb.org/t/p/original/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"
                       className="movieReview__recommend-img" alt="" />

                  <figcaption className="movieReview__recommend-caption">
                    <ul className="movieReview__recommend-genres">
                      <li>Action</li>
                      <li>Adventure</li>
                      <li>Fantasy</li>
                    </ul>
                  </figcaption>
                </figure>

                <div className="movieReview__recommend-description">
                  <a href="/movie/#616037" className="movieReview__recommend-link">
                    <div className="movieReview__recommend-title">Thor: Love and Thunder</div>
                  </a>

                  <div className="movieReview__recommend-content">
                    <div className="movieReview__recommend-release">2022</div>

                    <div
                      className="movieReview__rating-value movie-review__rating-value--sm movie-review__recommend-rate">6.689
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

export default Movie;