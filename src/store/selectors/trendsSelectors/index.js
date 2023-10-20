import { selectorFavoriteMovieIDs } from 'store/selectors/favoritesSelectors';

export const selectorTrendsState = state => state.trends;

export const selectorTrendsStateWithFavorites = ( state ) => {
  const { trends, ...rest } = selectorTrendsState( state );
  const favoriteMoviesIDs = selectorFavoriteMovieIDs( state );

  const modifiedTrends = trends.map( movie => ( {
    ...movie,
    isFavorite: favoriteMoviesIDs.includes( movie.id )
  } ) );

  return {
    ...rest,
    trends: modifiedTrends
  };
};