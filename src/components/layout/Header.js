import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';

import Menu from "components/Menu";
import Search from "components/Search";

import { setSearch, setDefaultData } from 'store/actions';
import { selectorSearchStatus } from 'store/selectors';
import { setPagination } from 'store/effects';

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();
  const searchData = useSelector( selectorSearchStatus );

  const navigate = useNavigate();

  const logoClickHandler = () => {
    if( searchData?.showSearchResults ) {
      dispatch( setDefaultData() );
    }

    dispatch( setPagination( { loaded: true, page: 1 } ) );
  };

  const submitHandler = ( query ) => {
    dispatch( setSearch( { loaded: true, showSearchRes: true, query, page: 1 } ) );

    navigate('/');
  };

  return (
    <header className={ styles.header }>
      <div className={ styles.headerContainer }>
        <Link to="/" className={ styles.headerLogo } onClick={ logoClickHandler }>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <div className={ styles.headerMenuContainer }>
          <Search submitHandler={ submitHandler } loaded={ searchData?.loaded } />

          <Menu />
        </div>
      </div>
    </header>
  );
};

export default Header;
