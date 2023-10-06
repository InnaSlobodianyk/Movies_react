import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetails } from 'store/effects/movieEffects';
import { selectorMovieState } from 'store/selectors/movieSelectors';

import Movie from 'components/movie';

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { fetching: movieFetching, movie: movieDetails } = useSelector( selectorMovieState );

  useEffect(() => {
    dispatch( getMovieDetails( movieId ) );
    // eslint-disable-next-line
  }, [movieId]);

  return movieDetails && <Movie movieDetails={ movieDetails } fetching={ movieFetching } />;
}

export default MoviePage;