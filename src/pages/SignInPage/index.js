import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import cn from 'classnames';

import { signInWithGoogleRedirect } from 'services/firebase';

import { signIn } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';
import { resetSignInErrorMessage } from 'store/actions/userActions';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';
import layoutStyles from 'components/layout/Layout.module.scss';
import styles from './SignInPage.module.scss';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const navigate = useNavigate();
  const userState = useSelector( selectorUserState );
  const dispatch = useDispatch();

  const submitHandler = ( event ) => {
    event.preventDefault();

    dispatch( signIn( { formFields, navigate } ) );
  };

  const formInputChangeHandler = ( e ) => {
    setFormFields({ ...formFields, [e.name]: e.value });
    dispatch( resetSignInErrorMessage() );
  };

  const signInWithGoogleHandler = () => signInWithGoogleRedirect().then( () => navigate('/') );

  const headingClassName = cn( layoutStyles.pageHeading, layoutStyles['pageHeading--1'], styles.signInFormHeading );

  return (
    <div className={ layoutStyles.pageContainer }>
      <h1 className={ headingClassName }>
        Already have an account?
      </h1>

      <p className={ styles.signInFormSubHeading }>Sign in with your email and password</p>

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