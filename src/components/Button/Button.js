import cn from "classnames";

import styles from "./Button.module.scss";

const Button = ( props ) => {
    return (
        <button className={cn(styles.btn, props.className && props.className)}>
            { props.children }
        </button>
    );
}

export default Button;