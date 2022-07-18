import genreClass from "./Genre.module.scss";
import {useEffect, useState} from "react";
import {apiRequestGenresUrl, key} from "../../config";

const Genre = (props) => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getAllGenres = async () => {
      const response = await fetch(`${apiRequestGenresUrl}?api_key=${key}`);
      const responseData = await response.json();

      setGenres(responseData.genres);
    }

    getAllGenres();
  }, [setGenres]);

  const getGenresNames = movieGenresArr => {
    let genresNames = [];

    movieGenresArr.map(genreId => {
      genres.filter(genre => {
        if (genre.id === genreId) {
          genresNames = [...genresNames, genre.name];
        }

        return genresNames
      });

      return genresNames;
    });

    return genresNames;
  };

  let movieGenres = getGenresNames(props.genres);

  return (
    <ul>
      {movieGenres.map(genreItem => {
        return <li key={genreItem} className={[genreClass['item'], props.className].join(' ')}>{genreItem}</li>;
      })}
    </ul>
  );
}

export default Genre;