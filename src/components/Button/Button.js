import buttonClass from "./Button.module.scss";

const Button = ( props ) => {
    return (
        <button className={[ buttonClass['btn'], props.className && props.className ].join(' ')}>
            { props.children }
        </button>
    );
}

export default Button;