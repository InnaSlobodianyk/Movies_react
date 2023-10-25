import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';
import { selectorUserState } from 'store/selectors/userSelectors';
import { resetSignInErrorMessage } from 'store/actions/userActions';

import Button from 'components/Button';
import Input from 'components/Input';
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
  const userState = useSelector( selectorUserState );
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    setError,
    clearErrors,
    control,
  } = useForm( {
    defaultValues: defaultFormFields,
    mode: 'onChange'
  } );

  // TODO: for validation
  useEffect( () => {
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

  const submitHandler = ( data ) => dispatch( signIn( data ) );

  const formInputChangeHandler = ( e ) => {
    // TODO: for the next step with validation
    // dispatch( resetSignInErrorMessage() );
    // clearErrors( 'default' );
  };

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Already have an account?</PageHeading>

      <PageSubHeading>Sign in with your email and password</PageSubHeading>

      <form onSubmit={ handleSubmit( submitHandler ) } className={ styles.signInForm }>
        <Input
          label='Email'
          type='email'
          name='email'
          required
          control={ control }
          validationSchema={ {
            required: 'Email field is required!',
            validate: {
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                'Email address must be a valid address',
            },
          } }

        />

        <Input
          label='Password'
          type='password'
          name='password'
          required
          control={ control }
          validationSchema={ {
            required: 'Password field is required!',
            minLength: {
              value: 6,
              message: 'Password must be at least 6 characters'
            },
          } }
        />

        {/*TODO: for next step with validation*/}
        { errors?.default && <div className={ styles.formErrorMessage }>{ errors.default.message }</div> }

        <div className={ styles.signInFormButtonsContainer }>
          <Label className={ styles.signInFormBtn }>
            <Button type='submit' disabled={ !isValid }>Sign In</Button>
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