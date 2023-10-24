import {
  setCurrentUser,
  setLogOutError,
  setSignInErrorMessage,
  setSignUpErrorMessage,
  setUserFetching
} from 'store/actions/userActions';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signInAuthUserWithEmailAndPassword,
  signInWithGoogleRedirect,
  signOutUser
} from 'services/firebase';

export const getCurrentUser = () =>
  async ( dispatch ) => {
    dispatch( setUserFetching( true ) );

    try {
      await onAuthStateChangedListener( async ( user ) => {
        if ( user ) {
          await createUserDocumentFromAuth( user );
        }

        dispatch( setCurrentUser( user ) );
      } );
    } catch ( e ) {
      dispatch( setCurrentUser( null ) );
    } finally {
      dispatch( setUserFetching( false ) );
    }
  };

export const signIn = ( formFields ) =>
  async ( dispatch ) => {

  try {
    await signInAuthUserWithEmailAndPassword( formFields.email, formFields.password );
  } catch ( error ) {
    dispatch( setSignInErrorMessage( error ) );
  }
};

export const signInWithGoogle = () =>
  async ( dispatch ) => {

    try {
      await signInWithGoogleRedirect();
    } catch ( error ) {
      dispatch( setSignInErrorMessage( error ) );
    }
  };

export const signUp = ( { formFields, navigate } ) =>
  async ( dispatch ) => {
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