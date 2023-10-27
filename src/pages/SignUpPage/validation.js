import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { signInSchema } from 'pages/SignInPage/validation';

const signUpSchema = signInSchema.shape( {
  displayName: Yup.string().label( 'Display Name' ).trim().required( 'Display Name field is required!' ).min( 2 ),
  confirmPassword: Yup.string().label( 'Confirm Password' ).required( 'Confirm Password field is required!' ).oneOf( [Yup.ref( 'password' ), null], 'Passwords do not match' ),
} );

export const resolver = yupResolver( signUpSchema );