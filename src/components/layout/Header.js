import { Link } from "react-router-dom";
import Menu from "components/Menu";

import logo from "assets/images/movierise-logo.png";

import styles from './Header.module.scss';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <Link to="/" className={styles.headerLogo}>
          <img src={ logo } alt="logo-movierise"/>
        </Link>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
