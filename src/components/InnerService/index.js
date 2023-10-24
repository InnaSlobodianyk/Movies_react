import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getFavoriteMovies } from 'store/effects/favoritesEffects';

const InnerService = () => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( getFavoriteMovies() );
  }, [] );

  return null;
}

export default InnerService;
