import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

import { getRedirectResult } from 'firebase/auth';

import { createUserDocumentFromAuth, auth } from 'services/firebase';

import SignUpForm from 'components/SignUpForm';

const SignUpPage = ( { user } ) => {
  useEffect( () => {
    const checkAuth = async () => {
      const response = await getRedirectResult( auth );

      if( response ) {
        await createUserDocumentFromAuth( response.user );
      }
    }

    checkAuth();
  }, []);

  return user ? <Navigate to='/' /> : <SignUpForm />;
};

export default SignUpPage;