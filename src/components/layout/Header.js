import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

import Menu from "components/Menu";
import Search from "components/Search";

import {
  setLoadedState,
  setSearchResultsShow,
} from 'store/actions';
import { selectorMovieLoader, selectorShowSearchResults } from 'store/selectors';
import { setPagination } from 'store/effects';

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = ( { searchHandler } ) => {
  const dispatch = useDispatch();
  const showSearchResults = useSelector( selectorShowSearchResults );
  const loaded = useSelector( selectorMovieLoader );

  const navigate = useNavigate();

  const clickHandler = () => {
    if( showSearchResults ) {
      dispatch( setSearchResultsShow(false) );
    }

    dispatch( setPagination( { loaded: true, page: 1 } ) );
  };

  const submitHandler = ( query ) => {

    dispatch( setPagination( { loaded: false, page: 1 } ) );

    searchHandler( query );

    dispatch( setSearchResultsShow(true) );

    dispatch( setLoadedState(true) );

    navigate('/');
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo } onClick={ clickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <Search submitHandler={ submitHandler } loaded={ loaded } />

          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
