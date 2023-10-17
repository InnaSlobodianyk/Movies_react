import { selectorFavoriteMovieIDs } from 'store/selectors/favoritesSelectors';

export const selectorMovieState = state => state.movie;

export const selectorMovieStateWithFavorites = ( state ) => {
  const { movie } = selectorMovieState( state );
  const favoriteMoviesIDs = selectorFavoriteMovieIDs( state );

  return { ...movie, isFavorite: favoriteMoviesIDs?.includes( movie?.id ) };
};