import { connect, useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Menu from "components/Menu";
import Search from "components/Search";

import {
  setCurrentPage,
  setSearchQuery,
  setSearchResultsShow,
} from "store";

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const showSearchResults = useSelector(( state ) => state.showSearchResults);

  const clickHandler = () => {
    if( showSearchResults ) {
      dispatch( setSearchResultsShow(false) );
      dispatch( setSearchQuery('') );
    }

    dispatch( setCurrentPage(1) );
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo } onClick={ clickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <Search  />

          <Menu />
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = ( state ) => {
  return {
    ...state,
    movies: state.movies,
    currentPage: state.currentPage,
    totalPages: state.totalPages,
    totalResults: state.totalResults,
    loaded: state.loaded
  };
};

export default connect(mapStateToProps, {
  setCurrentPage,
  setSearchQuery,
  setSearchResultsShow,
})(Header);
