import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setSearchDefaultData, setPagination } from 'store/actions';
import { selectorSearchState, selectorUserState } from 'store/selectors';
import { getMovieSearchResults } from 'store/effects';

import Menu from 'components/Menu';
import Search from 'components/Search';
import Authentication from 'components/Authentication';

import logo from 'assets/images/movierise-logo.png';

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { fetching: searchFetching, searchedMovies } = useSelector( selectorSearchState );
  const { fetching: currentUserFetching } = useSelector( selectorUserState );
  const isSearch = searchedMovies.length > 0;

  const logoClickHandler = () => {
    if( isSearch ) {
      dispatch( setSearchDefaultData );
    }

    dispatch( setPagination( { isSearch, fetching: false, page: 1 } ) );
  };

  const submitHandler = ( query ) => {
    dispatch( getMovieSearchResults({ searchQuery: query, currentPage: 1 }) );
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

          { !currentUserFetching && (
            <>
              <Menu />

              <Authentication />
            </>
          ) }
        </div>
      </div>
    </header>
  );
};

export default Header;