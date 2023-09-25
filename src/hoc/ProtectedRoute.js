import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors/userSelectors';

import Loader from 'components/Loader';

const ProtectedRoute = () => {
  const { currentUser: user } = useSelector( selectorUserState );

  return user === undefined ? <Loader /> : user ? <Outlet /> : <Navigate to='/sign-in/' replace />;
};

export default ProtectedRoute;