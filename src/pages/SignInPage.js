import { Navigate } from 'react-router-dom';

import SignInForm from 'components/SignInForm';

const SignInPage = ( { user } ) => user ? <Navigate to='/' /> : <SignInForm />;

export default SignInPage;