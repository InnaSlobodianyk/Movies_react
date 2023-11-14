import cn from 'classnames';

import styles from './Label.module.scss';

export const LABEL_VARIANTS = {
  plain: 'plain',
  bordered: 'bordered',
  gradient: 'gradient',
  btn: 'btn'
};

export const LABEL_SIZES = {
  large: 'large',
};

const Label = ( { variant, size, className, children } ) => {
  const labelClassName = variant === LABEL_VARIANTS.plain ? styles.plain : variant === LABEL_VARIANTS.bordered ? styles.bordered : styles.gradient;

  return (
    <div className={ cn( styles.label, labelClassName, size === LABEL_SIZES.large ? styles.large : '', className ) }>
      { children }
    </div>
  );
};

export default Label;