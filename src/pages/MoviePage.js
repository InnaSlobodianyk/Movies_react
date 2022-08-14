import { useParams } from "react-router-dom";
import React, {useCallback, useEffect, useState} from "react";
import { apiRequestUrl, key } from "../config";
import Movie from "../components/movie/Movie";

const MoviePage = () => {
  const params = useParams();

  console.log('%c HEREEEE' , 'background: #222; color: #bada55');
  console.log(params.movieId);

  const { movieId } = params;

  const [movie, setMovie] = useState([]);

  const requestUrl = `${apiRequestUrl}${movieId}?api_key=${key}&append_to_response=videos,similar,recommendations,credits`;

  const getMovie = useCallback(async () => {
    const response = await fetch(requestUrl);
    const responseData = await response.json();
    setMovie(responseData);
    // return responseData;
  }, [requestUrl]);

  useEffect(() => {
    // const getMovie = async () => {
    //   const response = await fetch(requestUrl);
    //   const responseData = await response.json();
    //   return responseData;
    // }
    //
    // getMovie().then(data => {
    //   if (!canceled) {
    //     setMovie(data.results);
    //   }
    // });
    getMovie();

  }, [requestUrl, setMovie, getMovie]);

  console.log('%c 343434' , 'background: #222; color: #bada55');
  console.log(movie);

  return <Movie movieId={movieId} movieDetails={movie} />;
}

export default React.memo(MoviePage);