import styles from './App.module.scss';
import Header from './components/Header/Header';
import TrendcardsContainer from "./components/TrendcardsContainer/TrendcardsContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
        <div className={styles['app__container']}>
            <h2 className={[styles['app__heading'], styles['app__heading--2']].join(' ')}>Trending movies</h2>
            <TrendcardsContainer />
        </div>
    </div>
  );
}

export default App;
