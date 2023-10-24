import { selectorFavoriteMovieIDs } from 'store/selectors/favoritesSelectors';

export const selectorSearchState = state => state.search;

export const selectorSearchStateWithFavorites = ( state ) => {
  const { searchedMovies, ...rest } = selectorSearchState( state );
  const favoriteMovieIDs = selectorFavoriteMovieIDs( state );

  const modifiedSearchedMovies = searchedMovies.map( movie => ( {
    ...movie,
    isFavorite: favoriteMovieIDs.includes( movie.id )
  } ) );

  return {
    ...rest,
    searchedMovies: modifiedSearchedMovies
  };
};
