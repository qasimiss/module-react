import "./carditem.scss"

const handler = () => {
    console.log("Click");
}
const CardItem = ({url, title, descr, price, weight}) => {
    return(
        <div className="card">
            <img src={url} alt="pizza" className="card__img" />
            <h2 className="card__title">{title}</h2>
            <div className="card__descr">{descr}</div>
            <div className="card__footer">
                <span className="card__price">{price}&ensp;₽ /</span>
                <span className="card__weight">&ensp;{weight} г.</span>
                <button onClick={handler} className="card__button"/>
            </div>
        </div>
    );
}

export default CardItem;
