import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movie from 'components/movie';
import { getMovieDetails } from 'store/effects';
import { selectorMovie } from 'store/selectors';

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movie = useSelector( selectorMovie );
  const movieDetails = movie?.movie;
  const loaded = movie?.loaded;


  useEffect(() => {
    dispatch( getMovieDetails( movieId ) );
  }, [dispatch, movieId]);

  return  movieDetails && <Movie movieDetails={ movieDetails } loaded={ loaded } />;
}

export default MoviePage;