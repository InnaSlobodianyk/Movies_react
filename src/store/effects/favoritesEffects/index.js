import { getFavoritesAndDocuments } from 'services/firebase';
import { getMovie } from 'services/movie';

import { setFavorites, setFavoritesFetchingState } from 'store/actions/favoritesActions';

import { roundRatingValue } from 'helpers';

export const getFavoriteMovies = () =>
  async ( dispatch ) => {
    dispatch( setFavoritesFetchingState( true ) );

    try {
      const favorites = await getFavoritesAndDocuments();

      const favoriteMovies = favorites?.map( async ( id ) => {
        const response = await getMovie( id );
        const ratingRounded = roundRatingValue( response.vote_average );

        return { ...response, vote_average: ratingRounded, favorite: true };
      } );

      const movies = await Promise.all( favoriteMovies );
      const favoritesData = {
        favoriteMovies: movies,
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
