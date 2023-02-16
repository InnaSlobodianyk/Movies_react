import cn from "classnames";

import Label from "components/Label";

import styles from "./Genre.module.scss";

const Genre = ( { genres, labeled, variant, className } ) => {
  const itemClasses = cn( styles.item, className );

  return (
    <ul className={ styles.genres }>
      { genres.map( ( genreItem, index ) => (
        <li key={ index } className={ itemClasses }>
          { labeled ?
            <Label variant={ variant || null }>
              { genreItem.name }
            </Label> :
            <span>{ genreItem.name }</span>
          }
        </li>
      ) ) }
    </ul>
  );
}

export default Genre;