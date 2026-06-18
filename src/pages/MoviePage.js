import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { getMovieDetails } from 'store/effects/movieEffects';
import { selectorMovieState, selectorMovieStateWithFavorites } from 'store/selectors/movieSelectors';
import { selectorLanguageState } from 'store/selectors/languageSelectors';

import Movie from 'components/movie';

const MoviePage = () => {
  const { movieId } = useParams();
  const dispatch = useDispatch();
  const { fetching: movieFetching } = useSelector( selectorMovieState );
  const movieDetails = useSelector( selectorMovieStateWithFavorites );
  const { currentLanguage } = useSelector( selectorLanguageState );

  useEffect( () => {
    dispatch( getMovieDetails( { id: movieId, currentLanguage } ) );
  }, [currentLanguage, dispatch, movieId] );

  return movieDetails && <Movie movieDetails={ movieDetails } fetching={ movieFetching } />;
}

export default MoviePage;