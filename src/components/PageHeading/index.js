import cn from 'classnames';

import layoutStyles from 'components/layout/Layout.module.scss';
import styles from "./PageHeading.module.scss";

const PageHeading = ( { className, children } ) => {
  const headingClassName = cn( layoutStyles.pageHeading, layoutStyles['pageHeading--1'], styles.heading, className );

  return (
    <h1 className={ headingClassName }>{ children }</h1>
  );
};

export default PageHeading;