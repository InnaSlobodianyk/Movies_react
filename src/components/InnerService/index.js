import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getFavoriteMovies } from 'store/effects/favoritesEffects';

const InnerService = ( user ) => {
  const dispatch = useDispatch();

  useEffect( () => {
    if ( user ) dispatch( getFavoriteMovies() );
  }, [ user ] );

  return null;
}

export default InnerService;
