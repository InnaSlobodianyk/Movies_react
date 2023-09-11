import { setCurrentUser, setUserFetching } from 'store/actions/userActions';

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