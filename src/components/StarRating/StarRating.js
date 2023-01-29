import React from "react";

import { calcRatingWidth, roundRatingValue } from "helpers";
import Label from "components/Label/Label";
import Stars from "components/Stars/Stars";

import styles from "./StarRating.module.scss";

const StarRating = ({ rating }) => {
  const ratingWidth = calcRatingWidth(rating);
  const ratingValue = roundRatingValue(rating);

  return (
    <div className={ styles.rating }>
      <div className={ styles.rating__inner }>
        <div className={ styles.rating__base }>
          <Stars isOutline />
        </div>

        <div className={ styles.rating__active } style={{width: `${ ratingWidth }`}}>
          <Stars />
        </div>
      </div>

      <Label>
        <span className={ styles.rating__label }>
          { ratingValue }
        </span>
      </Label>
    </div>
  );
};

export default React.memo(StarRating);