import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import Menu from 'components/Menu';
import Search from 'components/Search';

import { setSearch, setDefaultData } from 'store/actions';
import { selectorSearchState } from 'store/selectors';
import { setPagination } from 'store/effects';

import logo from 'assets/images/movierise-logo.png';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchState = useSelector( selectorSearchState );
  const isSearch = searchState?.searchedMovies?.length > 0;
  const searchFetching = searchState?.fetching;

  const logoClickHandler = () => {
    if( isSearch ) {
      dispatch( setDefaultData() );
    }

    dispatch( setPagination( { isSearch, fetching: false, page: 1 } ) );
  };

  const submitHandler = ( query ) => {
    dispatch( setSearch( { fetching: true, page: 1, searchQuery: query } ) );
    navigate('/');
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
        </div>
      </div>
    </header>
  );
};

export default Header;