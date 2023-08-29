import { NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

import { selectorUserState } from 'store/selectors';
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
  const userState = useSelector( selectorUserState );
  const currentUser = userState.currentUser;

  if( !currentUser ) return;

  return (
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
  );
};

export default Menu;