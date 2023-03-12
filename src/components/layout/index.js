import { useLocation } from "react-router-dom";

import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout = ( { searchQueryHandler, ...props } ) => {
  const location = useLocation();
  const searchHandler = ( query ) => {
    searchQueryHandler( query );
  };

  return (
    <>
      <Header searchHandler={ searchHandler } />
      <main className={ location.pathname !== '/' ? styles.pageContainer : '' }>
        {props.children}
      </main>
    </>
  );
};

export default Layout;