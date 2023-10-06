import AuthMenu from 'components/AuthMenu';
import styles from './Header.module.scss';
import logo from 'assets/images/movierise-logo.png';

const PublicHeader = () => (
  <header className={ styles.header }>
    <div className={ styles.headerContainer }>
      <div className={ styles.headerLogo }>
        <img src={ logo } alt="logo-movierise"/>
      </div>

      <div className={ styles.headerMenuContainer }>
        <AuthMenu />
      </div>
    </div>
  </header>
);

export default PublicHeader;