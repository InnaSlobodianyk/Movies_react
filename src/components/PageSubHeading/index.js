import cn from 'classnames';

import styles from './PageSubHeading.module.scss';

const PageSubHeading = ( { className, children } ) => {
  const subHeadingClassName = cn( styles.subHeading, className );

  return (
    <p className={ subHeadingClassName }>{ children }</p>
  );
};

export default PageSubHeading;