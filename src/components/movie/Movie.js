import {useCallback, useEffect, useState} from "react";
import { IoBookmarkOutline } from "react-icons/io5";
import { apiRequestUrl, imageUrl, key } from "../../config";
import { sendRequest } from "../../service/apiService";

import Button from "../Button/Button";
import Genre from "../Genre/Genre";

import styles from "./Movie.module.scss";

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

const Movie = ( movie ) => {
  const [movieDetails, setMovieDetails] = useState([]);

  const getMovie = useCallback(async () => {
    return await sendRequest(`${apiRequestUrl}${movie.movieId}?api_key=${key}&append_to_response=videos,similar,recommendations,credits`);
  }, [movie.movieId]);

  useEffect(() => {
    getMovie()
      .then((response) => {
        const movieResponse = response.data;
        setMovieDetails(movieResponse);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, [getMovie, movie.movieId]);

  console.log(movieDetails.genres);

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
            <Button data-hash={movie.movieId}>
              <IoBookmarkOutline />
            </Button>
            {/*<a href="#" className="movieReview__icon favorites-icon" data-hash="725201">*/}
            {/*  <i className="fa fa-bookmark-o" />*/}
            {/*</a>*/}
          </div>

          <div className={styles.movieReview__subheading}>
            <div className={styles.movieReview__info}>
              <span className={styles.movieReview__release}>2022</span>
              <ul className={styles.movieReview__genres}>
                <Genre className={styles.movieReview__genresItem} genres={movieDetails.genres} />
              </ul>
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

              <span className="movieReview__rating-value rating__value">6.971</span>
            </div>
          </div>

          <table className="movieReview__table table table-striped movie-review__section">
            <tbody>
            <tr>
              <td>Country</td>
              <td className="movieReview__country-desc" data-label="Country">
                <ul className="movieReview__country">
                  <li className="movieReview__country-item">Czech Republic</li>
                  <li className="movieReview__country-item">United States of America</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Slogan</td>
              <td className="movieReview__slogan-desc" data-label="Slogan" />
            </tr>
            <tr>
              <td>Runtime</td>
              <td data-label="Runtime">
                <div className="runtime"><span>2:08:00</span></div>
              </td>
            </tr>
            <tr>
              <td>Budget</td>
              <td className="movieReview__budget-desc" data-label="Budget">$ 200 000 000</td>
            </tr>
            <tr>
              <td>Homepage</td>
              <td className="movieReview__homepage-desc" data-label="Homepage"><a
                href="https://www.netflix.com/title/81160697">https://www.netflix.com/title/81160697</a></td>
            </tr>
            <tr>
              <td>Production companies</td>
              <td className="movieReview__company-desc" data-label="Production companies">
                <ul className="movieReview__company">
                  <li className="movieReview__company-item">Stillking Films</li>
                  <li className="movieReview__company-item">Roth-Kirschenbaum Films</li>
                  <li className="movieReview__company-item">AGBO</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>Overview</td>
              <td className="movieReview__overview-desc" data-label="Overview">When a shadowy CIA agent uncovers
                damning agency secrets, he's hunted across the globe by a sociopathic rogue operative who's put a
                bounty on his head.
              </td>
            </tr>
            </tbody>
          </table>
          <div className="movieReview__trailer movie-review__section"><h2
            className="movieReview__title-second">Watch trailer</h2>
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
          <div className="movieReview__actors movie-review__section"><h2
            className="movieReview__title-second">Actors</h2>
            <ul className="movieReview__actors-wrapper scrollbar">
              <li className="movieReview__actors-card">
                <figure className="movieReview__actors-img-wrapper">
                  <img src="http://image.tmdb.org/t/p/original/lyUyVARQKhGxaxy0FbPJCQRpiaW.jpg"
                       className="movieReview__actors-img" alt="" />
                </figure>

                <div className="movieReview__actors-description">
                  <div className="movieReview__actors-name">Ryan Gosling</div>
                  <div className="movieReview__actors-character">Six</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="movieReview__similar movie-review__section"><h2
            className="movieReview__title-second">More similar movies</h2>
            <ul className="movieReview__similar-wrapper scrollbar">
              <li className="movieReview__similar-card">
                <figure className="movieReview__similar-img-wrapper">
                  <img src="http://image.tmdb.org/t/p/original/aHzdMSKwq9ucnP2yXl5zYIfKgGl.jpg"
                       className="movieReview__similar-img" alt="" />

                  <figcaption className="movieReview__similar-caption">
                    <ul className="movieReview__similar-genres">
                      <li>Romance</li>
                      <li>Comedy</li>
                    </ul>
                  </figcaption>
                </figure>

                <div className="movieReview__similar-description">
                  <a href="/movie/#272693" className="movieReview__similar-link">
                    <div className="movieReview__similar-title">The DUFF</div>
                  </a>

                  <div className="movieReview__similar-content">
                    <div className="movieReview__similar-release">2015</div>

                    <div
                      className="movieReview__rating-value movie-review__rating-value--sm movie-review__similar-rate">6.8
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
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