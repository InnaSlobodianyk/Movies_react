import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors/userSelectors';

import styles from "./Menu.module.scss";

const menu = [
  {
    url: '/lists/',
    title: 'Lists'
  },
  {
    url: '/favorites/',
    title: 'Favorites'
  },
];

const Menu = () => {
  const { fetching: currentUserFetching, currentUser } = useSelector( selectorUserState );

  if( !currentUser ) return;

  return (
    <>
      { !currentUserFetching && (
        <nav className={styles.menuNav} role="navigation">
          <ul className={styles.menu}>
            {menu.map((menuItem) => (
              <li key={menuItem.title} className={styles.menuItem}>
                <NavLink to={menuItem.url} className={styles.menuLink}>
                  <span className={styles.menuLinkName}>{menuItem.title}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      ) }
    </>
  );
};

export default Menu;