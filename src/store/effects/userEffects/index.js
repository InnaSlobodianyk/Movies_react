import {
  setCurrentUser,
  setLogOutError,
  setSignInErrorMessage,
  setSignUpErrorMatchPasswordMessage,
  setSignUpErrorMessage,
  setUserFetching
} from 'store/actions/userActions';
import {
  auth,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signInAuthUserWithEmailAndPassword,
  signOutUser
} from 'services/firebase';
import { getRedirectResult } from 'firebase/auth';

export const getCurrentUser = () =>
  async ( dispatch ) => {
    await onAuthStateChangedListener( async ( user ) => {
      dispatch( setUserFetching( true ) );

      if ( user ) {
        await createUserDocumentFromAuth( user );
      }

      try {
        dispatch( setCurrentUser( user ) );
      } catch ( e ) {
        dispatch( setCurrentUser( null ) );
      } finally {
        dispatch( setUserFetching( false ) );
      }
    } );
  };

export const checkAuth = () =>
 async ( dispatch ) => {

  try {
    const response = await getRedirectResult( auth );

    if( response ) {
      await createUserDocumentFromAuth( response.user );
    }
  } catch ( e ) {
    dispatch( setSignUpErrorMessage( e ) );
  }
}

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

export const signOut = () =>
  async ( dispatch ) => {

    try {
      await signOutUser();
    } catch ( error ) {
      dispatch( setLogOutError( error ) );
    }
  };