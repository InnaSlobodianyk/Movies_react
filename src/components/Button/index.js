import cn from "classnames";

import styles from "./Button.module.scss";

export const BUTTON_VARIANTS = {
    primary: 'btnPrimary',
    secondary: 'btnSecondary',
    gradient: 'btnGradient',
    transparent: 'btnTransparent',
};

export const BUTTON_SIZES = {
    small: 'btnSmall',
};

const Button = ({
    type = 'button',
    disabled = false,
    className,
    onClick,
    variant = BUTTON_VARIANTS.secondary,
    size,
    children
}) => {
    const buttonClasses = cn( styles.btn, styles[variant], styles[size], className );

    return (
        <button
          className={ buttonClasses }
          type={ type }
          disabled={ disabled }
          onClick={ onClick }
        >
            { children }
        </button>
    );
}

export default Button;