import cn from "classnames";

import styles from "./Button.module.scss";

const Button = ({ type = 'button', disabled = false, className, children }) => {
    const buttonClasses = cn(styles.btn, className);

    return (
        <button className={buttonClasses} type={type} disabled={disabled}>
            { children }
        </button>
    );
}

export default Button;