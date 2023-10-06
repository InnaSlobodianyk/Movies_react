import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';
import { resetSignInErrorMessage } from 'store/actions/userActions';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import layoutStyles from 'components/layout/Layout.module.scss';
import styles from './SignInPage.module.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const userState = useSelector( selectorUserState );
  const dispatch = useDispatch();

  const submitHandler = ( event ) => {
    event.preventDefault();

    dispatch( signIn( formFields ) );
  };

  const formInputChangeHandler = ( e ) => {
    setFormFields({ ...formFields, [e.name]: e.value });
    dispatch( resetSignInErrorMessage() );
  };

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Already have an account?</PageHeading>

      <PageSubHeading>Sign in with your email and password</PageSubHeading>

      <form onSubmit={ submitHandler } className={ styles.signInForm }>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={ formInputChangeHandler }
          name='email'
          value={ formFields.email }
          error={ userState?.errorEmailMessage }
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={ formInputChangeHandler }
          name='password'
          value={ formFields.password }
          error={ userState?.errorPasswordMessage }
        />

        <div className={ styles.signInFormButtonsContainer }>
          <Label className={ styles.signInFormBtn }>
            <Button type='submit'>Sign In</Button>
          </Label>

          <Label variant='plain' className={ styles.signInFormBtn }>
            <Button onClick={ signInWithGoogleHandler }>
              Sign In with Google
            </Button>
          </Label>
        </div>
      </form>
    </div>
  );
};

export default SignInPage;