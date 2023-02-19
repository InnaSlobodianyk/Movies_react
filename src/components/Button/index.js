import cn from "classnames";

import styles from "./Button.module.scss";

const Button = ({ type = 'button', disabled = false, className, onClick, children }) => {
    const buttonClasses = cn( styles.btn, className );

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