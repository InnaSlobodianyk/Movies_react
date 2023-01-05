import cn from "classnames";

import styles from "./Label.module.scss";

const Label = ( props ) => {
  return (
    <div className={cn(styles.label, props.variant && props.variant === 'plain' ? styles.plain : styles.gradient, props.className)}>
      {props.children}
    </div>
  );
};

export default Label;