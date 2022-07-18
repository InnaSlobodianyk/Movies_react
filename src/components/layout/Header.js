import { Link, NavLink } from "react-router-dom";

import classes from './Header.module.scss';
import logo from "../../images/movierise-logo.png";

const Header = () => {
  return (
    <header className={classes['header']}>
      <div className={classes['header__container']}>
        <Link to="/" className={classes['header__logo']}>
          <img src={logo} alt="logo-movierise"/>
        </Link>
        <nav className={classes['header__menu-nav']} role="navigation">
          <ul className={classes['header__menu']}>
            <li className={classes['header__menu-item']}>
              <NavLink to="/lists/" className={classes['header__menu-link']}>
                <span className={classes['header__menu-link-name']}>Lists</span>
              </NavLink>
            </li>
            <li className={classes['header__menu-item']}>
              <NavLink to="/favorites/" className={classes['header__menu-link']}>
                <i className="fa fa-bookmark"/>
                <span className={classes['header__menu-link-name']}>Favorites</span>
                <span className={classes['header__menu-num']}/>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
