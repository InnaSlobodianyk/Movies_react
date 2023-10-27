import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { signUp } from 'store/effects/userEffects';

import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignUpForm from './SignUpForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignUpPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = ( formFields ) => dispatch( signUp( { formFields, navigate } ) );

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Don't have an account?</PageHeading>

      <PageSubHeading>Sign up with your email and password</PageSubHeading>

      <SignUpForm submitHandler={ submitHandler } />
    </div>
  );
};

export default SignUpPage;