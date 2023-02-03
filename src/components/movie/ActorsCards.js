import cn from "classnames";

import { imageFullUrl } from "helpers";
import imgPlaceholder from "../../assets/images/person.png";

import styles from "components/movie/Movie.module.scss";

const ActorsCards = ({ cast }) => (
  <ul className={ cn( styles.movieReview__actorsWrapper, styles.movieReview__scrollbar ) }>
    { cast.map( (item, index) => (
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
);

export default ActorsCards;