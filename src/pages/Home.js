import cn from "classnames";

import TrendcardsContainer from "components/TrendcardsContainer/TrendcardsContainer";

import styles from "components/layout/Layout.module.scss";

const Home = () => {
  return (
    <>
      <h2 className={cn(styles.pageHeading, styles['pageHeading--2'])}>Trending movies</h2>
      <TrendcardsContainer />
    </>
  )
};

export default Home;