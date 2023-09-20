import { Outlet } from 'react-router-dom';

import PublicHeader from './PublicHeader';
import styles from './Layout.module.scss';

const PublicLayout = () => (
  <>
    <PublicHeader />
    <main className={ styles.pageContainer }>
      <Outlet />
    </main>
  </>
);

export default PublicLayout;