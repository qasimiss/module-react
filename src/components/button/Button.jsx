import "./button.scss";

const Button = ({color, text}) => {
    return (
        <button className={"button button--"+color}>
            {text}
        </button>
    )
}
export default Button;