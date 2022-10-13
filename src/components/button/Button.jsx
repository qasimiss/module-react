import "./button.scss";

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} className={"button button--"+color}>
            {text}
        </button>
    )
}
export default Button;