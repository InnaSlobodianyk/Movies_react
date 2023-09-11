import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Movie from 'components/movie';
import { getMovieDetails } from 'store/effects/movieEffects';
import { selectorMovieState } from 'store/selectors/movieSelectors';

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  const movieState = useSelector( selectorMovieState );
  const movieDetails = movieState.movie;
  const movieFetching = movieState.fetching;


  useEffect(() => {
    dispatch( getMovieDetails( movieId ) );
    // eslint-disable-next-line
  }, [movieId]);

  return movieDetails && <Movie movieDetails={ movieDetails } fetching={ movieFetching } />;
}

export default MoviePage;