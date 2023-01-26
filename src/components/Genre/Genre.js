import cn from "classnames";
import { useEffect, useMemo, useState } from "react";

import { getAllGenres } from "services/genres";
import Label from "../Label/Label";

import styles from "./Genre.module.scss";

const filterGenres = (allGenres, genres) => {
  return allGenres.filter(el => genres.some(item => item === el.id));
};

const Genre = ( props ) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    getAllGenres().then((response) => {
      setAllGenres(response);
    });

  }, []);

  const filteredGenres = useMemo(() => filterGenres(allGenres, props.genres), [allGenres, props.genres]);

  const itemClasses = cn( styles.item, props.className );

  return (
    <ul className={ styles.genres }>
      { filteredGenres.map( genreItem => {
        return <li key={ genreItem.name } className={ itemClasses }>
          { props.labeled ?
            <Label variant={ props.variant || null }>
              { genreItem.name }
            </Label> :
            <span>{ genreItem.name }</span>
          }
        </li>;
      } ) }
    </ul>
  );
}

export default Genre;