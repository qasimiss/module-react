import "./button.scss";

const Button = ({color, text, onClick, disabled}) => {
    return (
        <button disabled={disabled} onClick={onClick} className={"button button--"+color}>
            {text}
        </button>
    )
}
export default Button;