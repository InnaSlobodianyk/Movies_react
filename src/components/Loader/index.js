import styles from "./Loader.module.scss";

const Loader = () => (
  <div className={ styles.spinnerContainer }>
    <div className={ styles.spinner }></div>
  </div>
);

export default Loader;