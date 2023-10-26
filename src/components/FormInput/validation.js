import * as Yup from 'yup';

export const signInSchema = Yup.object().shape( {
  email: Yup.string().label( 'Email' ).trim().required( 'Email field is required!' ).email(),
  password: Yup.string().label( 'Password' ).required( 'Password field is required!' ).min( 6 ),
} );

export const signUpSchema = signInSchema.shape( {
  displayName: Yup.string().label( 'Display Name' ).trim().required( 'Display Name field is required!' ).min( 2 ),
  confirmPassword: Yup.string().label( 'Confirm Password' ).required( 'Confirm Password field is required!' ).oneOf( [Yup.ref( 'password' ), null], 'Passwords do not match' ),
} );