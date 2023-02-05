import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Movie from "components/movie/Movie";
import { getMovie } from "services/movie";

const MoviePage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    getMovie(movieId)
      .then((response) => {
        setMovieDetails(response);
      })
  }, [movieId]);

  return  movieDetails && <Movie movieDetails={ movieDetails } />;
}

export default MoviePage;