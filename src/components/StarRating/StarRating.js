import { IoStar, IoStarOutline } from "react-icons/io5";
import { calcRatingWidth, roundRatingValue } from "helpers/helpers";
import Label from "components/Label/Label";

import styles from "./StarRating.module.scss";

const Stars = ({ isOutline }) => {
  return (
    <>
      {[...Array(10)].map((star, index) => {
        return isOutline ? <IoStarOutline key={index} /> : <IoStar key={index} />;
      })}
    </>
  );
};

const StarRating = ({ rating }) => {
  return (
    <div className={styles.rating}>
      <div className={styles.rating__inner}>
        <div className={styles.rating__base}>
          <Stars isOutline />
        </div>

        <div className={styles.rating__active} style={{width: `${calcRatingWidth(rating)}`}}>
          <Stars />
        </div>
      </div>

      <Label>
        <span className={styles.rating__label}>
          {roundRatingValue(rating)}
        </span>
      </Label>
    </div>
  );
};

export default StarRating;