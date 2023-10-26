import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';

import Button from 'components/Button';
import Input from 'components/Input';
import { signInSchema } from 'components/FormInput/validation';
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
  const dispatch = useDispatch();
  const {
    handleSubmit,
    formState: { errors, isValid },
    setError,
    control,
  } = useForm( {
    defaultValues: defaultFormFields,
    mode: 'onChange',
    resolver: yupResolver( signInSchema ),
  } );

  const submitHandler = ( data ) => dispatch( signIn( data ) );

  const submitClickHandler = ( e ) => {
    e.preventDefault();

    handleSubmit( ( payload ) => submitHandler( payload )
      .then( ( response ) => {
        if ( response ) {
          setError( response.name, {
            type: 'server',
            message: response.message,
          } );
        }
      } ) )();
  };

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Already have an account?</PageHeading>

      <PageSubHeading>Sign in with your email and password</PageSubHeading>

      <form onSubmit={ submitClickHandler } className={ styles.signInForm }>
        <Input
          label='Email'
          type='email'
          name='email'
          required
          control={ control }
        />

        <Input
          label='Password'
          type='password'
          name='password'
          required
          control={ control }
        />

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