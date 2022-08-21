import cn from "classnames";
import { useEffect, useMemo, useState } from "react";

import { getAllGenres } from "services/genres";

import styles from "./Genre.module.scss";

const filterGenres = (allGenres, genres) => {
  return allGenres.filter(el => genres.some(item => item === el.id));
};

const Genre = (props) => {
  const [allGenres, setAllGenres] = useState([]);

  useEffect(() => {
    getAllGenres().then((response) => {
      setAllGenres(response.genres);
    })
  }, []);

  const filteredGenres = useMemo(() => filterGenres(allGenres, props.genres), [allGenres, props.genres]);

  const itemClasses = cn(styles.item, props.className);

  return (
    <ul>
      {filteredGenres.map(genreItem => {
        return <li key={genreItem.name} className={itemClasses}>{genreItem.name}</li>;
      })}
    </ul>
  );
}

export default Genre;