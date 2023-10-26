import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { signUp } from 'store/effects/userEffects';

import Button from 'components/Button';
import Label from 'components/Label';
import PageHeading from 'components/PageHeading';
import PageSubHeading from 'components/PageSubHeading';
import Input from 'components/Input';
import { signUpSchema } from 'components/FormInput/validation';

import layoutStyles from 'components/layout/Layout.module.scss';
import styles from './SignUpPage.module.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpPage = () => {
  const {
    handleSubmit,
    formState: { errors, isValid },
    setError,
    control,
  } = useForm( {
    defaultValues: defaultFormFields,
    mode: 'onChange',
    resolver: yupResolver( signUpSchema ),
  } );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitHandler = ( data ) => dispatch( signUp( { formFields: data, navigate } ) );

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

  return (
    <div className={ layoutStyles.pageContainer }>
      <PageHeading>Don't have an account?</PageHeading>

      <PageSubHeading>Sign up with your email and password</PageSubHeading>

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
          <Button type='submit' disabled={ !isValid }>Sign Up</Button>
        </Label>
      </form>
    </div>
  );
};

export default SignUpPage;