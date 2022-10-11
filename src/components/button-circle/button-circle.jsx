import "./button-circle.scss"
const ButtonCircle = ({svg, onClick}) => {
    return(
        <button onClick={onClick} className="button--circle">{svg}</button>
    );
}
export default ButtonCircle;