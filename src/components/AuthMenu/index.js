import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

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

const AuthMenu = () => {
  const { t } = useTranslation();

  return (
    <ul className={ styles.authMenu }>
      { auth.map( ( authItem ) => (
        <li key={ authItem.title } className={ styles.authMenuItem }>
          <NavLink to={ authItem.url } className={ styles.authMenuLink }>
            {/*<span className={ styles.authMenuLinkName }>{ authItem.title }</span>*/}
            <span className={ styles.authMenuLinkName }>{ t( authItem.title ) }</span>
          </NavLink>
        </li>
      ) ) }
    </ul>
  );
};

export default React.memo( AuthMenu );
