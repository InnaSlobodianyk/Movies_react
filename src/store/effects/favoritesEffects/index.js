import { getFavoritesAndDocuments } from 'services/firebase';
import { getMovie } from 'services/movie';

import { setFavorites, setFavoritesFetchingState } from 'store/actions/favoritesActions';

import { roundRatingValue } from 'helpers';

export const getFavoriteMovies = () =>
  async ( dispatch ) => {
    dispatch( setFavoritesFetchingState( true ) );

    try {
      const favoriteMoviesIDs = await getFavoritesAndDocuments();

      const favorites = favoriteMoviesIDs.map( getMovie );

      const movies = await Promise.all( favorites );

      const favoriteMovies = movies.map( movie => ({
        ...movie,
        isFavorite: true,
        vote_average: roundRatingValue( movie.vote_average )
      }));

      const favoritesData = {
        favoriteMovies,
        currentPage: 1
      };

      dispatch( setFavorites( favoritesData ) );
    } catch (e) {
      dispatch( setFavorites( {
        favoriteMovies: [],
        currentPage: 0
      } ) );
    } finally {
      dispatch( setFavoritesFetchingState( false ) );
    }
  };
