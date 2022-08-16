import React from "react";
import { useParams } from "react-router-dom";

import Movie from "../components/movie/Movie";

const MoviePage = () => {
  const params = useParams();

  const { movieId } = params;

  return <Movie movieId={movieId} />;
}

export default MoviePage;