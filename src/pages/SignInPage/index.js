import { useDispatch } from 'react-redux';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';

import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignInForm from './SignInForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignInPage = () => {
  const dispatch = useDispatch();
  const submitHandler = ( data ) => dispatch( signIn( data ) );

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Already have an account?</PageHeading>

      <PageSubHeading>Sign in with your email and password</PageSubHeading>

      <SignInForm submitHandler={ submitHandler } signInWithGoogleSubmitHandler={ signInWithGoogleHandler } />
    </div>
  );
};

export default SignInPage;