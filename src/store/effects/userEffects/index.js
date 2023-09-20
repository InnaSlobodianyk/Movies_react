import {
  setAuthenticatedUser,
  setCurrentUser,
  setLogOutError,
  setSignInErrorMessage,
  setSignUpErrorMatchPasswordMessage,
  setSignUpErrorMessage,
  setUserFetching
} from 'store/actions/userActions';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
  signInAuthUserWithEmailAndPassword,
  signOutUser
} from 'services/firebase';

export const getCurrentUser = () =>
  async ( dispatch ) => {
    onAuthStateChangedListener( async ( user ) => {
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

export const signIn = ( { formFields, navigate } ) =>
  async ( dispatch ) => {

  try {
    await signInAuthUserWithEmailAndPassword( formFields.email, formFields.password );
    localStorage.setItem('user', 'loggedIn');
    dispatch( setAuthenticatedUser( true ) );
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
    localStorage.setItem('user', 'loggedIn');
    dispatch( setAuthenticatedUser( true ) );
    navigate('/');
  } catch (error) {
    dispatch( setSignUpErrorMessage( error ) );
  }
};

export const signOut = () =>
  async ( dispatch ) => {

    try {
      await signOutUser();
      localStorage.removeItem('user');
      dispatch( setAuthenticatedUser( false ) );
    } catch ( error ) {
      dispatch( setLogOutError( error ) );
    }
  };