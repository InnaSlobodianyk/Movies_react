import cn from "classnames";
import { useEffect, useState } from "react";

import { apiRequestGenresUrl, key } from "../../config";
import { sendRequest } from "../../service/apiService";

import styles from "./Genre.module.scss";

const filterGenres = (allGenres, genres) => {
  return allGenres.filter(el => genres.some(item => item === el.id));
};

const Genre = (props) => {
  const [allGenres, setAllGenres] = useState([]);

  const getAllGenres = async () => {
    return await sendRequest(`${apiRequestGenresUrl}?api_key=${key}`);
  }

  useEffect(() => {
    getAllGenres()
      .then((response) => {
        const genresResponse = response.data;
        setAllGenres(genresResponse.genres);
    })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  let filteredGenres = filterGenres(allGenres, props.genres);

  let movieGenres = filteredGenres.map((genre) => {
    let genreName = [];

    genreName = [...genreName, genre.name];

    return genreName;
  });

  return (
    <ul>
      {movieGenres.map(genreItem => {
        return <li key={genreItem} className={cn(styles.item, props.className && props.className)}>{genreItem}</li>;
      })}
    </ul>
  );
}

export default Genre;