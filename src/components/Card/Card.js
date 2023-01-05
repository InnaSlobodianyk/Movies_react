import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoStar } from "react-icons/io5";
import cn from "classnames";

import { imageUrl } from "config";
import { calcDate, limitMovieTitle, roundRatingValue } from "helpers/helpers";
import Genre from "components/Genre/Genre";

import styles from "./Card.module.scss";

const Card = ({ props }) => {
  const [item, setItem] = useState();

  useEffect(() => {
    setItem(props)

    return () => {};
  }, [item, props]);

  if(!item) return <></>;

  const ratingRounded = roundRatingValue(item.vote_average);

  return (
    <div className={cn(styles.card, props.className)}>
      <Link to={`/movie/${item.id}`}>
        <figure className={styles.card__imgWrapper}>
          <img src={item.poster_path && `${imageUrl}/${item.poster_path}`}
               className={styles.card__img} alt="" />
        </figure>
      </Link>

      <div className={styles.card__description}>
        <Link to={`/movie/${item.id}`} className={styles.card__link}>
          <span className={styles.card__title}>{limitMovieTitle(item.title)}</span>
        </Link>

        <div className={styles.card__details}>
          {item.genre_ids && (
            <Genre genres={item.genre_ids} />
          )}

          <div className={styles.card__content}>
            {item.release_date && (
              <div className={styles.card__release}>{ calcDate(item.release_date) }</div>
            )}

            {item.vote_average && (
              <div className={styles.card__ratingValue}>
                <IoStar className={styles.card__ratingStar} />
                {ratingRounded}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;