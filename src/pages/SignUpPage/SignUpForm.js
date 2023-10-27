import { useForm } from 'react-hook-form';

import Input from 'components/Input';
import Label from 'components/Label';
import Button from 'components/Button';

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
        label='Display Name'
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
        label='Password'
        type='password'
        required
        name='password'
        control={ control }
      />

      <Input
        label='Confirm Password'
        type='password'
        required
        name='confirmPassword'
        control={ control }
      />

      { errors?.default && <div className={ styles.formErrorMessage }>{ errors.default.message }</div> }

      <Label className={ styles.signUpFormBtn }>
        <Button type='submit' disabled={ !isDirty }>Sign Up</Button>
      </Label>
    </form>
  );
}

export default SignUpForm;
