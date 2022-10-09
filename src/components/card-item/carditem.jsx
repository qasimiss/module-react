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
                <button onClick={handler} className="card__button">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1.28564V12.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default CardItem;
