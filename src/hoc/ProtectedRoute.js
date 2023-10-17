import { useEffect } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors/userSelectors';
import { getFavoriteMovies } from 'store/effects/favoritesEffects';

import Loader from 'components/Loader';

const ProtectedRoute = () => {
  const dispatch = useDispatch();
  const { currentUser: user } = useSelector( selectorUserState );

  useEffect( () => {
    if ( user ) dispatch( getFavoriteMovies() );
  }, [ user ] );

  return user === undefined ? <Loader /> : user ? <Outlet /> : <Navigate to='/sign-in/' replace />;
};

export default ProtectedRoute;