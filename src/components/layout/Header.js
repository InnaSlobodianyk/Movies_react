import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

import { setPagination } from 'store/actions';
import { setSearchDefaultData } from 'store/actions/searchActions';
import { selectorSearchState } from 'store/selectors/searchSelectors';
import { selectorUserState } from 'store/selectors/userSelectors';
import { getMovieSearchResults } from 'store/effects/searchEffects';

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