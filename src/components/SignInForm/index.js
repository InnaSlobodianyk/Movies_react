import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInAuthUserWithEmailAndPassword, signInWithGoogleRedirect } from 'services/firebase';
import cn from 'classnames';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';

import layoutStyles from 'components/layout/Layout.module.scss';
import styles from "./SignInForm.module.scss";


const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [ formFields, setFormFields ] = useState( defaultFormFields );
  const { email, password } = formFields;
  const navigate = useNavigate();

  const resetFormFields = () => {
    setFormFields( defaultFormFields );
  };

  const submitHandler = async ( event ) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword( email, password );

      resetFormFields();

      navigate('/');
    } catch ( error ) {
      switch( error.code ) {
        case 'auth/wrong-password':
          alert('Incorrect password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.log( error );
      }
    }
  };

  const formInputChangeHandler = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogleHandler = () => {
    signInWithGoogleRedirect().then( () => {
      console.log('%c logged', 'background: #222; color: #bada55');
      navigate('/');
    });

    // navigate('/');
  };

  return(
    <div className={ layoutStyles.pageContainer }>
      <h1 className={ cn( layoutStyles.pageHeading, layoutStyles['pageHeading--1'], styles.signInFormHeading ) }>
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

export default SignInForm;