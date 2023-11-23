import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';

import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignInForm from './SignInForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignInPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const submitHandler = ( data ) => dispatch( signIn( data ) );

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
    <div className={ layoutStyles.pageContainer }>
      <Trans i18nKey='sign_in_heading' t={ t }>
        <PageHeading>Already have an account?</PageHeading>
      </Trans>

      <Trans i18nKey='sign_in_subheading' t={ t }>
        <PageSubHeading>Sign in with your email and password</PageSubHeading>
      </Trans>

      <SignInForm submitHandler={ submitHandler } signInWithGoogleSubmitHandler={ signInWithGoogleHandler } />
    </div>
  );
};

export default SignInPage;