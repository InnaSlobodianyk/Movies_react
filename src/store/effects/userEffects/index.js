import {
  setCurrentUser,
  setSignInErrorMessage,
  setSignUpErrorMatchPasswordMessage,
  setSignUpErrorMessage,
  setUserFetching
} from 'store/actions/userActions';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword
} from 'services/firebase';

export const getCurrentUser = ( user ) =>
  async ( dispatch ) => {
    dispatch( setUserFetching( true ) );

    try {
      dispatch( setCurrentUser( user ) );
    } catch ( e ) {
      dispatch( setCurrentUser( null ) );
    } finally {
      dispatch( setUserFetching( false ) );
    }
  };

export const signIn = ( { formFields, navigate } ) =>
  async ( dispatch ) => {

  try {
    await signInAuthUserWithEmailAndPassword( formFields.email, formFields.password );
    navigate('/');
  } catch ( error ) {
    dispatch( setSignInErrorMessage( error ) );
  }
};

export const signUp = ( { formFields, navigate } ) =>
  async ( dispatch ) => {

  if( formFields.password !== formFields.confirmPassword ) {
    dispatch( setSignUpErrorMatchPasswordMessage( 'Passwords do not match' ) );
    return;
  }

  try {
    const { user } = await createAuthUserWithEmailAndPassword( formFields.email, formFields.password );
    const { displayName } = formFields;

    await createUserDocumentFromAuth( user, { displayName } );
    navigate('/');
  } catch (error) {
    dispatch( setSignUpErrorMessage( error ) );
  }
};