import { Navigate, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader';

const ProtectedRoute = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState( true );
  const [isUserLoggedInFetching, setIsUserLoggedInFetching] = useState( true );
  const sessionUserStatus = localStorage.getItem('user');
  const path = window.location.pathname;

  useEffect( () => {
    setIsUserLoggedIn( sessionUserStatus === 'loggedIn' );
    setIsUserLoggedInFetching( false );
  }, [isUserLoggedIn, path, sessionUserStatus] );

  return isUserLoggedInFetching ? <Loader /> : isUserLoggedIn ? <Outlet /> : <Navigate to='/sign-in/' replace />;
};

export default ProtectedRoute;