import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import Menu from "components/Menu";
import SearchForm from "components/SearchForm";

import { STORE_ACTIONS } from "store";

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const showSearchResults = useSelector(( state ) => state.showSearchResults);

  const clickHandler = () => {
    if( showSearchResults ) {
      dispatch( { type: STORE_ACTIONS.SHOW_SEARCH_RESULTS, payload: false } );
      dispatch( { type: STORE_ACTIONS.SEARCH_QUERY, payload: '' } );
      dispatch( { type: STORE_ACTIONS.SET_CURRENT_PAGE, payload: 1 } );
    }
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo } onClick={ clickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <SearchForm  />

          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
