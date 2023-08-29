import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from 'services/firebase';
import cn from 'classnames';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';

import layoutStyles from 'components/layout/Layout.module.scss';
import styles from "./SignUpForm.module.scss";

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const { displayName, email, password, confirmPassword } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields( defaultFormFields );
  };

  const submitHandler = async ( event ) => {
    event.preventDefault();

    if( password !== confirmPassword ) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth( user, { displayName } );
      resetFormFields();

      navigate('/');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('User creation encountered an error', error);
      }
    }
  };

  const formInputChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return(
    <div className={ layoutStyles.pageContainer }>
      <h1 className={ cn( layoutStyles.pageHeading, layoutStyles['pageHeading--1'], styles.signUpFormHeading ) }>Don't have an account?</h1>

      <p className={ styles.signUpFormSubHeading }>Sign up with your email and password</p>

      <form onSubmit={ submitHandler } className={ styles.signUpForm }>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={ formInputChangeHandler }
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={ formInputChangeHandler }
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={ formInputChangeHandler }
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={ formInputChangeHandler }
          name='confirmPassword'
          value={confirmPassword}
        />

        <Label className={ styles.signUpFormBtn }>
          <Button type='submit'>Sign Up</Button>
        </Label>
      </form>
    </div>
  );
};

export default SignUpForm;