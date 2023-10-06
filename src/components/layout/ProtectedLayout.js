import { Outlet, useLocation } from 'react-router-dom';
import ProtectedHeader from './ProtectedHeader';

import styles from './Layout.module.scss';

const ProtectedLayout = () => {
  const location = useLocation();

  return (
    <>
      <ProtectedHeader />

      <main className={ location.pathname !== '/' ? styles.pageContainer : '' }>
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;