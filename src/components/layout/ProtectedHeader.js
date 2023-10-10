import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { selectorSearchState } from 'store/selectors/searchSelectors';
import { selectorFavoritesState } from 'store/selectors/favoritesSelectors';
import { setSearchDefaultData } from 'store/actions/searchActions';
import { setPagination } from 'store/actions';
import { getMovieSearchResults } from 'store/effects/searchEffects';
import { signOut } from 'store/effects/userEffects';

import Search from 'components/Search';
import Menu from 'components/Menu';
import Button from 'components/Button';

import styles from './Header.module.scss';
import logo from 'assets/images/movierise-logo.png';

const ProtectedHeader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fetching: searchFetching, searchedMovies } = useSelector( selectorSearchState );
  const { favoriteMovies } = useSelector( selectorFavoritesState );
  const isSearch = searchedMovies.length > 0;

  const logoClickHandler = () => {
    isSearch && dispatch( setSearchDefaultData() );

    dispatch( setPagination( { isSearch, fetching: false, page: 1 } ) );
  };

  const submitHandler = ( query ) => {
    dispatch( getMovieSearchResults({ searchQuery: query, currentPage: 1, favoriteMovies }) );
    navigate('/');
  };

  const signOutHandler = () => {
    dispatch( signOut( false ) );
    navigate('/sign-in/');
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo } onClick={ logoClickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <Search submitHandler={ submitHandler } fetching={ searchFetching } />

          <Menu />

          <div className={styles.headerMenuItem}>
            <div className={ styles.headerMenuLink }>
              <Button className={styles.headerMenuLinkName} onClick={ signOutHandler }>Log Out</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProtectedHeader;