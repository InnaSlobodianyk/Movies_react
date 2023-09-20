import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader';

const PublicRoute = () => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState( false );
  const [isUserLoggedInFetching, setIsUserLoggedInFetching] = useState( true );
  const navigate = useNavigate();
  const sessionUserStatus = localStorage.getItem('user');
  const path = window.location.pathname;

  useEffect( () => {
    setIsUserLoggedIn( sessionUserStatus === 'loggedIn' );
    setIsUserLoggedInFetching( false );
    isUserLoggedIn && navigate( path );
  }, [isUserLoggedIn, path, sessionUserStatus] );

  return isUserLoggedInFetching ? <Loader /> : !isUserLoggedIn ? <Outlet /> : <Navigate to='/' replace />;
};

export default PublicRoute;