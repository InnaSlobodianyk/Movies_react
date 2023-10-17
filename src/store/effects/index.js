import { addCollectionAndDocuments, removeFromDocument } from 'services/firebase';

import {
  addMovieToFavorites,
  removeMovieFromFavorites,
  seFavoritesError,
} from 'store/actions/favoritesActions';

export const addToFavorites = ( { movie } ) =>
  async ( dispatch, getState ) => {
    const { favorites, user } = getState();
    const { favoriteMovies } = favorites;
    const { uid: currentUserId } = user?.currentUser;
    const movieId = movie?.id;

    try {
      if ( favoriteMovies?.indexOf( movieId ) === -1 ) {
        await addCollectionAndDocuments( 'favorites', currentUserId, movieId );
        dispatch( addMovieToFavorites( { ...movie, isFavorite: true } ) );
      }
    } catch ( error ) {
      dispatch( seFavoritesError( error.message ) );
    }
  };

export const removeFromFavorites = ( { movieId } ) =>
  async ( dispatch, getState ) => {
    const { user } = getState();
    const { uid: currentUserId } = user?.currentUser;

    try {
      await removeFromDocument( 'favorites', currentUserId, movieId );
      dispatch( removeMovieFromFavorites( movieId ) );
    } catch ( error ) {
      dispatch( seFavoritesError( error.message ) );
    }
  };
