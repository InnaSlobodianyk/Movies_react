import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signUp } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';
import { resetSignInErrorMessage } from 'store/actions/userActions';

import Button from 'components/Button';
import FormInput from 'components/FormInput';
import Label from 'components/Label';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';

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
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    setError,
  } = useForm( {
    defaultValues: defaultFormFields,
    mode: 'onChange'
  } );

  useEffect( () => {
    if ( userState?.errorDisplayNameMessage ) {
      setError( 'displayName', { type: 'custom', message: userState?.errorDisplayNameMessage }, { shouldFocus: true } );
    }

    if ( userState?.errorEmailMessage ) {
      setError( 'email', { type: 'custom', message: userState?.errorEmailMessage }, { shouldFocus: true } );
    }

    if ( userState?.errorPasswordMessage ) {
      setError( 'password', { type: 'custom', message: userState?.errorPasswordMessage }, { shouldFocus: true } );
    }

    if ( userState?.errorDefaultMessage ) {
      setError( 'default', { type: 'custom', message: userState?.errorDefaultMessage } );
    }

  }, [ setError, userState ] );

  const submitHandler = ( data ) => dispatch( signUp( { formFields: data, navigate } ) );

  const formInputChangeHandler = ( e ) => {
    setFormFields({ ...formFields, [e.target?.name]: e.target?.value });
    dispatch( resetSignInErrorMessage() );
  };

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Don't have an account?</PageHeading>

      <PageSubHeading>Sign up with your email and password</PageSubHeading>

      <form onSubmit={ handleSubmit( submitHandler ) } className={ styles.signUpForm }>
        <FormInput
          label='Display Name'
          type='text'
          required
          name='displayName'
          value={ formFields.displayName }
          errors={ errors }
          register={ register }
          validationSchema={ {
            required: 'Display Name field is required!',
            minLength: {
              value: 2,
              message: 'Display Name must be at least 2 characters'
            },
            onChange: formInputChangeHandler
          } }
        />

        <FormInput
          label='Email'
          type='email'
          required
          name='email'
          value={ formFields.email }
          errors={ errors }
          register={ register }
          validationSchema={ {
            required: 'Email field is required!',
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address'
            },
            onChange: formInputChangeHandler
          } }
        />

        <FormInput
          label='Password'
          type='password'
          required
          name='password'
          value={ formFields.password }
          errors={ errors }
          register={ register }
          validationSchema={ {
            required: 'Password field is required!',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            },
            onChange: formInputChangeHandler
          } }
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          name='confirmPassword'
          value={ formFields.confirmPassword }
          errors={ errors }
          register={ register }
          validationSchema={ {
            required: 'Confirm Password field is required!',
            validate: {
              match: value => watch( 'password' ) === value || 'Passwords do not match'
            },
            onChange: formInputChangeHandler
          } }
        />

        <Label className={ styles.signUpFormBtn }>
          <Button type='submit' disabled={ !isValid }>Sign Up</Button>
        </Label>
      </form>
    </div>
  );
};

export default SignUpPage;