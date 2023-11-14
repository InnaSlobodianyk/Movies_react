import { setLanguage } from 'store/actions/languageActions';

export const setActiveLanguage = ( lang ) =>
  async ( dispatch ) => {

    try {
      dispatch( setLanguage( lang ) );
    } catch ( e ) {
      dispatch( setLanguage( 'en' ) );
    }
  };