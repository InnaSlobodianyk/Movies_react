import cn from "classnames";

import Label from "components/Label/Label";

import styles from "./Genre.module.scss";

const Genre = ( props ) => {
  const itemClasses = cn( styles.item, props.className );

  return (
    <ul className={ styles.genres }>
      { props.genres.map( ( genreItem, index ) => (
        <li key={ index } className={ itemClasses }>
          { props.labeled ?
            <Label variant={ props.variant || null }>
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