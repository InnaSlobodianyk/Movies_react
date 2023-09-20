import { NavLink } from 'react-router-dom';

import styles from './AuthMenu.module.scss';

const auth = [
  {
    url: '/sign-up/',
    title: 'Sign Up'
  },
  {
    url: '/sign-in/',
    title: 'Sign In'
  },
];

const AuthMenu = () => (
  <ul className={ styles.authMenu }>
    { auth.map((authItem) => (
      <li key={authItem.title} className={styles.authMenuItem}>
        <NavLink to={authItem.url} className={styles.authMenuLink}>
          <span className={styles.authMenuLinkName}>{authItem.title}</span>
        </NavLink>
      </li>
    )) }
  </ul>
);

export default AuthMenu;