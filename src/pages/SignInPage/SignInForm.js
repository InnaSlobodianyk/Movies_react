import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';

import { signIn, signInWithGoogle } from 'store/effects/userEffects';

import Input from 'components/Input';
import Label from 'components/Label';
import Button from 'components/Button';

import { resolver } from './validation';

import styles from './SignInPage.module.scss';

const defaultValues = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();

  const {
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    control,
  } = useForm( {
    defaultValues,
    mode: 'onChange',
    resolver,
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
      } )
    )();
  };

  const signInWithGoogleHandler = () => dispatch( signInWithGoogle() );

  return (
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
          <Button type='submit' disabled={ !isDirty }>Sign In</Button>
        </Label>

        <Label variant='plain' className={ styles.signInFormBtn }>
          <Button onClick={ signInWithGoogleHandler }>
            Sign In with Google
          </Button>
        </Label>
      </div>
    </form>
  );
}

export default SignInForm;
