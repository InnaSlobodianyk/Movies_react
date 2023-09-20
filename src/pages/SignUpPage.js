import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { checkAuth } from 'store/effects/userEffects';

import SignUpForm from 'components/SignUpForm';

const SignUpPage = ( { user } ) => {
  const dispatch = useDispatch();

  useEffect( () => {
    dispatch( checkAuth() );
  }, []);

  return user ? <Navigate to='/' /> : <SignUpForm />;
};

export default SignUpPage;