import {
  setCurrentUser,
  setLogOutError,
  setSignInErrorMessage,
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
  async () => {

    try {
      await signInAuthUserWithEmailAndPassword( formFields.email, formFields.password );
    } catch ( error ) {
      switch( error.code ) {
        case 'auth/wrong-password':
          return {
            name: 'password',
            message: 'Incorrect password'
          };
        case 'auth/user-not-found':
          return {
            name: 'email',
            message: 'No user associated with this email'
          };
        default:
          return {
            name: 'default',
            message: error.message
          };
      }
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
  async () => {

    try {
      const { user } = await createAuthUserWithEmailAndPassword( formFields.email, formFields.password );
      const { displayName } = formFields;

      await createUserDocumentFromAuth( user, { displayName } );
      navigate('/');
    } catch (error) {
      switch( error.code ) {
        case 'auth/email-already-in-use':
          return {
            name: 'email',
            message: 'Cannot create user, email already in use'
          };
        default:
          return {
            name: 'default',
            message: 'User creation encountered an error'
          };
      }
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