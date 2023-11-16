import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Input from 'components/Input';
import Button, { BUTTON_VARIANTS } from 'components/Button';

import { resolver } from './validation';

import styles from './SignUpPage.module.scss';

const defaultValues = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = ( { submitHandler } ) => {
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

  const submitClickHandler = handleSubmit( ( payload ) => submitHandler( payload )
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
    <form onSubmit={ submitClickHandler } className={ styles.signUpForm }>
      <Input
        label={ t( 'Display Name' ) }
        type='text'
        required
        name='displayName'
        control={ control }
      />

      <Input
        label='Email'
        type='email'
        required
        name='email'
        control={ control }
      />

      <Input
        label={ t( 'Password' ) }
        type='password'
        required
        name='password'
        control={ control }
      />

      <Input
        label={ t( 'Confirm Password' ) }
        type='password'
        required
        name='confirmPassword'
        control={ control }
      />

      { errors?.default && <div className={ styles.formErrorMessage }>{ errors.default.message }</div> }

      <Button
        type='submit'
        disabled={ !isDirty }
        variant={ BUTTON_VARIANTS.gradient }
      >
        { t( 'Sign Up' ) }
      </Button>
    </form>
  );
}

export default SignUpForm;
