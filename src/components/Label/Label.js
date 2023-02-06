import cn from "classnames";

import styles from "./Label.module.scss";

const Label = ( { variant, className, children } ) => {
  return (
    <div className={ cn( styles.label, variant === 'plain' ? styles.plain : styles.gradient, className ) }>
      { children }
    </div>
  );
};

export default Label;