import { Fragment } from "react";

import styles from "../components/layout/Layout.module.scss";
import TrendcardsContainer from "../components/TrendcardsContainer/TrendcardsContainer";

const Home = () => {
  return (
    <Fragment>
      <h2 className={[styles['page__heading'], styles['page__heading--2']].join(' ')}>Trending movies</h2>
      <TrendcardsContainer/>
    </Fragment>
  )
};

export default Home;