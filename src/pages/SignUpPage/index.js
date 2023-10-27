import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import SignUpForm from './SignUpForm';

import layoutStyles from 'components/layout/Layout.module.scss';

const SignUpPage = () => (
  <div className={ layoutStyles.pageContainer }>
    <PageHeading>Don't have an account?</PageHeading>

    <PageSubHeading>Sign up with your email and password</PageSubHeading>

    <SignUpForm />
  </div>
);

export default SignUpPage;