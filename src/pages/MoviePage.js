import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetails } from 'store/effects/movieEffects';
import { selectorMovieState } from 'store/selectors/movieSelectors';
import { selectorFavoritesState } from 'store/selectors/favoritesSelectors';

import Movie from 'components/movie';

import { isFavoriteMovie } from 'helpers';

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { fetching: movieFetching, movie } = useSelector( selectorMovieState );
  const { favoriteMovies } = useSelector( selectorFavoritesState );
  const isFavorite = isFavoriteMovie( favoriteMovies, movie );
  const movieDetails = { ...movie, favorite: isFavorite };

  useEffect(() => {
    dispatch( getMovieDetails( movieId ) );
    // eslint-disable-next-line
  }, [movieId]);

  return movieDetails && <Movie movieDetails={ movieDetails } fetching={ movieFetching } />;
}

export default MoviePage;