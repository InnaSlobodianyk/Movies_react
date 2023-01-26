import React, { useMemo } from "react";

import { IoStar, IoStarOutline } from "react-icons/io5";
import { calcRatingWidth, roundRatingValue } from "helpers";
import Label from "components/Label/Label";

import styles from "./StarRating.module.scss";

const starsNum = [...Array(10)];

const Stars = ({ isOutline }) => {
  return (
    <>
      { starsNum.map( (star, index) => {
        return isOutline ? <IoStarOutline key={ index } /> : <IoStar key={ index } />;
      } ) }
    </>
  );
};

const StarRating = ({ rating }) => {
  const ratingWidth = useMemo(() => calcRatingWidth(rating), [rating]);
  const ratingValue = useMemo(() => roundRatingValue(rating), [rating]);

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