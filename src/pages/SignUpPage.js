import { useEffect } from 'react';
import { getRedirectResult } from 'firebase/auth';
import { createUserDocumentFromAuth, auth } from 'services/firebase';

import SignUpForm from 'components/SignUpForm';

const SignUpPage = () => {
  useEffect( () => {
    const checkAuth = async () => {
      const response = await getRedirectResult( auth );

      if( response ) {
        await createUserDocumentFromAuth( response.user );
      }
    }

    checkAuth();
  }, []);

  return <SignUpForm />;
};

export default SignUpPage;