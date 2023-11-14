import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { selectorSearchState } from 'store/selectors/searchSelectors';
import { selectorLanguageState } from 'store/selectors/languageSelectors';
import { setSearchDefaultData } from 'store/actions/searchActions';
import { setPagination } from 'store/actions';
import { getMovieSearchResults } from 'store/effects/searchEffects';
import { signOut } from 'store/effects/userEffects';

import Search from 'components/Search';
import Menu from 'components/Menu';
import Button from 'components/Button';
import LanguageSwitcher from 'components/LanguageSwitcher';

import styles from './Header.module.scss';
import logo from 'assets/images/movierise-logo.png';

const ProtectedHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const { currentLanguage } = useSelector( selectorLanguageState );

  const { fetching: searchFetching, searchedMovies, searchQuery } = useSelector( selectorSearchState );
  const isSearch = searchedMovies.length > 0;

  useEffect( () => {
    dispatch( getMovieSearchResults( { searchQuery, currentPage: 1 } ) );
  }, [currentLanguage, searchQuery] );

  const logoClickHandler = () => {
    if ( isSearch ) {
      dispatch( setSearchDefaultData() );
    }

    dispatch( setPagination( { isSearch, fetching: false, page: 1 } ) );
  };

  const submitHandler = ( { search } ) => {
    if ( typeof search === 'string' ) {
      dispatch( getMovieSearchResults( { searchQuery: search, currentPage: 1 } ) );
      navigate( '/' );
    }
  };

  const signOutHandler = () => {
    dispatch( signOut( false ) );
    navigate('/sign-in/');
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to='/' className={ styles.headerLogo } onClick={ logoClickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <Search submitHandler={ submitHandler } fetching={ searchFetching } />

          <LanguageSwitcher />

          <Menu />

          <div className={styles.headerMenuItem}>
            <div className={ styles.headerMenuLink }>
              <Button className={styles.headerMenuLinkName} onClick={ signOutHandler }>{ t( 'Log Out' ) }</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProtectedHeader;