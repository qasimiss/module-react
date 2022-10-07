import "./carditem.scss"

const CardItem = ({url, title, descr, price, weight}) => {
    return(
        <div className="card">
            <img src={url} alt="pizza" className="card__img" />
            <div className="card__title">{title}</div>
            <div className="card__descr">{descr}</div>
            <div className="card__footer">
                <span className="card__price">{price}₽ /</span>
                <span className="card__weight">&ensp;{weight} г.</span>
                <button className="card__button"/>
            </div>
        </div>
    );
}

export default CardItem;
