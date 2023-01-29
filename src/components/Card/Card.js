import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import cn from "classnames";

import {
  calcDate,
  imageFullUrl,
  limitMovieTitle,
  roundRatingValue
} from "helpers";
import Genre from "components/Genre/Genre";

import styles from "./Card.module.scss";

const Card = ({ details }) => {
  const ratingRounded = useMemo( () => roundRatingValue(details.vote_average), [details.vote_average]);
  const movieTitle = useMemo(() => limitMovieTitle(details.title), [details.title]);
  const releaseDate = useMemo(() => calcDate(details.release_date), [details.release_date]);

  return (
    <div className={ cn( styles.card, details.className )}>
      <Link to={ `/movie/${details.id}` }>
        <figure className={ styles.card__imgWrapper }>
          { details.poster_path && (
            <img src={ imageFullUrl( { imagePath: details.poster_path } ) }
                 className={ styles.card__img } alt={ details.title || 'Poster' } />
          ) }
        </figure>
      </Link>

      <div className={ styles.card__description }>
        <Link to={ `/movie/${details.id}` } className={ styles.card__link }>
          <span className={ styles.card__title }>{ movieTitle }</span>
        </Link>

        <div className={styles.card__details}>
          { details.genre_ids && (
            <Genre genres={ details.genre_ids } />
          ) }

          <div className={ styles.card__content }>
            { details.release_date && (
              <div className={styles.card__release}>{ releaseDate }</div>
            ) }

            { details.vote_average && (
              <div className={ styles.card__ratingValue }>
                <IoStar className={ styles.card__ratingStar } />
                { ratingRounded }
              </div>
            ) }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;