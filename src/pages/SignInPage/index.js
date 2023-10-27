import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignInForm from './SignInForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignInPage = () => (
  <div className={ layoutStyles.pageContainer }>
    <PageHeading>Already have an account?</PageHeading>

    <PageSubHeading>Sign in with your email and password</PageSubHeading>

    <SignInForm />
  </div>
);

export default SignInPage;