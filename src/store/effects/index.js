import { addCollectionAndDocuments, removeFromDocument } from 'services/firebase';

import { addMovieToFavorites, removeMovieFromFavorites } from 'store/actions/favoritesActions';

export const addToFavorites = ( { favoriteMovies, movie, currentUserId } ) =>
  async ( dispatch ) => {
    dispatch( addMovieToFavorites( favoriteMovies, movie ) );
    await addCollectionAndDocuments( 'favorites', currentUserId, movie.id );
  };

export const removeFromFavorites = ( { favoriteMovies, movieId, currentUserId } ) =>
  async ( dispatch ) => {
    dispatch( removeMovieFromFavorites( favoriteMovies, movieId ) );
    await removeFromDocument( 'favorites', currentUserId, movieId );
  };
