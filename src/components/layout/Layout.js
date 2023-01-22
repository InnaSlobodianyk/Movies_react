import { useLocation } from "react-router-dom";

import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout = ( props ) => {
  const location = useLocation();

  return (
    <>
      <Header />
      <main className={ location.pathname !== '/' ? styles.pageContainer : ''}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;