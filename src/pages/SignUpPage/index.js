import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Trans, useTranslation } from 'react-i18next';

import { signUp } from 'store/effects/userEffects';

import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignUpForm from './SignUpForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const submitHandler = ( formFields ) => dispatch( signUp( { formFields, navigate } ) );

  return (
    <div className={ layoutStyles.pageContainer }>
      <Trans i18nKey='sign_up_heading' t={ t }>
        <PageHeading>Don't have an account?</PageHeading>
      </Trans>

      <Trans i18nKey='sign_up_subheading' t={ t }>
        <PageSubHeading>Sign up with your email and password</PageSubHeading>
      </Trans>

      <SignUpForm submitHandler={ submitHandler } />
    </div>
  );
};

export default SignUpPage;