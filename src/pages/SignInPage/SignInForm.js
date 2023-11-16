import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Input from 'components/Input';
import Button, { BUTTON_VARIANTS } from 'components/Button';

import { resolver } from './validation';

import styles from './SignInPage.module.scss';

const defaultValues = {
  email: '',
  password: '',
};

const SignInForm = ( { submitHandler, signInWithGoogleSubmitHandler } ) => {
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

  const { t } = useTranslation();

  const submitClickHandler = handleSubmit( ( data ) => submitHandler( data )
    .then( ( response ) => {
      if ( response ) {
        setError( response.name, {
          type: 'server',
          message: response.message,
        } );
      }
    } )
  );

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
        label={ t( 'Password' ) }
        type='password'
        name='password'
        required
        control={ control }
      />

      { errors?.default && <div className={ styles.formErrorMessage }>{ errors.default.message }</div> }

      <div className={ styles.signInFormButtonsContainer }>
        <Button
          type='submit'
          disabled={ !isDirty }
          variant={ BUTTON_VARIANTS.gradient }
        >
          { t( 'Sign In' ) }
        </Button>

        <Button onClick={ signInWithGoogleSubmitHandler }>
          { t( 'Sign In with Google' ) }
        </Button>
      </div>
    </form>
  );
}

export default SignInForm;
