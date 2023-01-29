import cn from "classnames";
import { useEffect, useState } from "react";

import { getAllGenres } from "services/genres";
import Label from "components/Label/Label";

import styles from "./Genre.module.scss";

const filterGenres = (allGenres, genres) => allGenres.filter(el => genres.some(item => item === el.id));

const Genre = ( props ) => {
  const [filteredGenres, setFilteredGenres] = useState([]);

  useEffect(() => {
    getAllGenres().then((response) => {
      const movieGenres = filterGenres(response, props.genres);
      setFilteredGenres(movieGenres);
    });
  }, [props.genres]);

  const itemClasses = cn( styles.item, props.className );

  return (
    <ul className={ styles.genres }>
      { filteredGenres.map( genreItem => (
        <li key={ genreItem.name } className={ itemClasses }>
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