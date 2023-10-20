import { getSlicedFavorites } from 'helpers';

export const selectorFavoritesState = state => state.favorites;

export const selectorFavoriteMovieIDs = ( state ) => {
  const { favoriteMovies } = selectorFavoritesState( state );

  return favoriteMovies.map( ( movie ) => movie.id );
};

export const selectorFavoritesPagination = ( state ) => {
  const { favoriteMovies } = selectorFavoritesState( state );
  const pageSize = 20;
  const isPaginationVisible = favoriteMovies.length > pageSize;
  const totalPages = Math.ceil( favoriteMovies.length / pageSize );
  const movies = getSlicedFavorites( { favorites: favoriteMovies, pageSize } );

  return { isPaginationVisible, totalPages, movies };
};
