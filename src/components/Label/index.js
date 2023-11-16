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

const Label = ( { variant = LABEL_VARIANTS.gradient, size, className, children } ) => (
  <div className={ cn( styles.label, styles[variant], size === LABEL_SIZES.large ? styles.large : '', className ) }>
    { children }
  </div>
);

export default Label;