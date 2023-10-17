import { getFavoritesAndDocuments } from 'services/firebase';
import { getMovie } from 'services/movie';

import { setFavorites, setFavoritesFetchingState } from 'store/actions/favoritesActions';

import { roundRatingValue } from 'helpers';

export const getFavoriteMovies = () =>
  async ( dispatch ) => {
    dispatch( setFavoritesFetchingState( true ) );

    try {
      const favoriteMoviesIDs = await getFavoritesAndDocuments();

      const favoriteMoviesArr = favoriteMoviesIDs?.map( async ( id ) => {
        const response = await getMovie( id );

        return { ...response, isFavorite: true };
      } );

      const movies = await Promise.all( favoriteMoviesArr );

      const favoriteMovies = movies?.map( movie => {
        const ratingRounded = roundRatingValue( movie.vote_average );
        return { ...movie, vote_average: ratingRounded };
      } );

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
