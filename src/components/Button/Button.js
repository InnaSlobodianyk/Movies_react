import cn from "classnames";

import styles from "./Button.module.scss";

const Button = ( props ) => {
    let buttonClasses;
    if (props.className) {
        buttonClasses = cn(styles.btn, props.className)
    } else {
        buttonClasses = styles.btn
    }

    return (
        <button className={buttonClasses}>
            { props.children }
        </button>
    );
}

export default Button;