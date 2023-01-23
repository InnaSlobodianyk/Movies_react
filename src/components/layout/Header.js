import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "components/Menu";

import SearchForm from "components/SearchForm/SearchForm";

import { loadingActions, searchActions } from "store";

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const showSearchResults = useSelector(( state ) => state.search.showSearchResults);

  const clickHandler = () => {
    dispatch(loadingActions.setLoaded(false));

    if(showSearchResults) {
      dispatch(searchActions.showSearchResults(false));
      dispatch(searchActions.searchQuery(''));
      dispatch(searchActions.setSearchResults([]));
      dispatch(searchActions.setTotalPages(0));
      dispatch(searchActions.setTotalResults(0));
    }

  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo }>
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
