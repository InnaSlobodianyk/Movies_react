import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getFavoriteMovies } from 'store/effects/favoritesEffects';
import { selectorLanguageState } from 'store/selectors/languageSelectors';

const InnerService = () => {
  const dispatch = useDispatch();
  const { currentLanguage } = useSelector( selectorLanguageState );

  useEffect( () => {
    dispatch( getFavoriteMovies( currentLanguage ) );
  }, [currentLanguage] );

  return null;
}

export default InnerService;
