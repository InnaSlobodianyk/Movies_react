import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const signInSchema = Yup.object().shape( {
  email: Yup.string().label( 'Email' ).trim().required( 'Email field is required!' ).email(),
  password: Yup.string().label( 'Password' ).required( 'Password field is required!' ).min( 6 ),
} );

export const resolver = yupResolver( signInSchema );