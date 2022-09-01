import Header from "./Header";

import styles from "./Layout.module.scss";

const Layout = ( props ) => {
  return (
    <>
      <Header />
      <main className={styles.pageContainer}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;