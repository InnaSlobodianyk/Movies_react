export const selectorFavoritesState = state => state.favorites;

export const selectorFavoriteMovieIDs = ( state ) => {
  const { favoriteMovies } = selectorFavoritesState( state );

  return favoriteMovies?.map( ( movie ) => movie.id );
};
