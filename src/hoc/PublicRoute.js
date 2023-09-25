import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors/userSelectors';

import Loader from 'components/Loader';

const PublicRoute = () => {
  const { currentUser: user } = useSelector( selectorUserState );

  return user === undefined ? <Loader /> : user ? <Navigate to='/' replace /> : <Outlet />;
};

export default PublicRoute;