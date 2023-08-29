import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors';
import { signOutUser } from 'services/firebase';

import Button from 'components/Button';
import styles from './Authentication.module.scss';

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

const Authentication = () => {
  const userState = useSelector( selectorUserState );
  const currentUser = userState.currentUser;
  console.log('%c user', 'background: #222; color: #bada55');
  console.log(currentUser);

  return(
    <>
      { currentUser
        ? <div className={styles.authMenuItem}>
            <div className={ styles.authMenuLink }>
              <Button className={styles.authMenuLinkName} onClick={ signOutUser }>Log Out</Button>
            </div>
          </div>
        : <ul className={ styles.authMenu }>
          { auth.map((authItem) => (
            <li key={authItem.title} className={styles.authMenuItem}>
              <NavLink to={authItem.url} className={styles.authMenuLink}>
                <span className={styles.authMenuLinkName}>{authItem.title}</span>
              </NavLink>
            </li>
          )) }
        </ul>
      }
    </>
  );
};

export default Authentication;