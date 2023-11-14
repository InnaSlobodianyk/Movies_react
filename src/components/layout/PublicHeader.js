import AuthMenu from 'components/AuthMenu';
import LanguageSwitcher from 'components/LanguageSwitcher';

import styles from './Header.module.scss';
import logo from 'assets/images/movierise-logo.png';

const PublicHeader = () => (
  <header className={ styles.header }>
    <div className={ styles.headerContainer }>
      <div className={ styles.headerLogo }>
        <img src={ logo } alt="logo-movierise"/>
      </div>

      <div className={ styles.headerMenuContainer }>
        <LanguageSwitcher />

        <AuthMenu />
      </div>
    </div>
  </header>
);

export default PublicHeader;