import cn from "classnames";

import styles from "./Button.module.scss";

const Button = ( props ) => {
    const buttonClasses = cn(styles.btn, props.className);

    return (
        <button className={buttonClasses}>
            { props.children }
        </button>
    );
}

export default Button;