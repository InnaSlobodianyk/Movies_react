import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import cn from 'classnames';

import { signUp } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';
import { resetSignInErrorMessage } from 'store/actions/userActions';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';

import layoutStyles from 'components/layout/Layout.module.scss';
import styles from './SignUpPage.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpPage = () => {
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userState = useSelector( selectorUserState );

  const submitHandler = ( event ) => {
    event.preventDefault();

    dispatch( signUp( { formFields, navigate } ) );
  }

  const formInputChangeHandler = ( e ) => {
    setFormFields({ ...formFields, [e.name]: e.value });
    dispatch( resetSignInErrorMessage() );
  };

  const headingClassName = cn( layoutStyles.pageHeading, layoutStyles['pageHeading--1'], styles.signUpFormHeading );

  return (
    <div className={ layoutStyles.pageContainer }>
      <h1 className={ headingClassName }>Don't have an account?</h1>

      <p className={ styles.signUpFormSubHeading }>Sign up with your email and password</p>

      <form onSubmit={ submitHandler } className={ styles.signUpForm }>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={ formInputChangeHandler }
          name='displayName'
          value={ formFields.displayName }
          error={ userState?.errorDisplayNameMessage }
        />

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

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={ formInputChangeHandler }
          name='confirmPassword'
          value={ formFields.confirmPassword }
          error={ userState?.errorConfirmPasswordMessage }
        />

        <Label className={ styles.signUpFormBtn }>
          <Button type='submit'>Sign Up</Button>
        </Label>
      </form>
    </div>
  );
};

export default SignUpPage;