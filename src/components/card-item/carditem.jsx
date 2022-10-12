import "./carditem.scss"
import ButtonCircle from "../button-circle";
import { useDispatch } from "react-redux";
import { addProductToBasket } from "../../store/reducers/basket";
import { removeProductFromBasket } from "../../store/reducers/basket";
import {v4 as uuidv4} from "uuid"


const CardItem = ({id,idx, url, title, descr, price, weight, circle, plus}) => {
   const dispatch = useDispatch()
   const addProduct = () => {
    const item = {
        id: id,
        idx: uuidv4(),
        url: url,
        title: title,
        price: price,
    }
    dispatch(addProductToBasket(item))
   }
   const removeProduct = () => {
    dispatch(removeProductFromBasket(idx))
   }
    return(
        <div className="card">
            <img src={url} alt="pizza" className="card__img" />
            <h2 className="card__title">{title}</h2>
            <div className="card__descr">{descr}</div>
            <div className="card__footer">
                <span className="card__price">{price}&ensp;₽</span>
                {plus && <span className="card__weight">&ensp;/&ensp;{weight} г.</span>}
                {plus && <button onClick={addProduct} className="card__button">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 1.28564V12.3571" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    <path d="M12.3569 6.82135L1.28551 6.82135" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>}
                {circle && <ButtonCircle 
                    onClick = {removeProduct}
                    svg = {<svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_3_666)">
                    <path d="M6.70408 6.07886L12.1218 11.4966C12.2723 11.6471 12.2723 11.891 12.1218 12.0415C12.0467 12.1168 11.948 12.1543 11.8495 12.1543C11.7508 12.1543 11.6523 12.1168 11.5771 12.0415L6.11867 6.583L0.660201 12.0415C0.584848 12.1168 0.486355 12.1543 0.387861 12.1543C0.289368 12.1543 0.190682 12.1168 0.115521 12.0415C-0.0349922 11.891 -0.0349922 11.6471 0.115521 11.4966L5.53306 6.07886L0.111887 0.657308C-0.0386267 0.506794 -0.0386267 0.26295 0.111887 0.112437C0.262401 -0.0378858 0.506245 -0.0378858 0.656568 0.112437L6.11848 5.57473L11.581 0.112628C11.7315 -0.0376946 11.9751 -0.0376946 12.1256 0.112628C12.2762 0.263142 12.2762 0.506985 12.1256 0.657499L6.70408 6.07886Z" fill="white"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_3_666">
                    <rect width="12.24" height="12.24" fill="white" transform="matrix(-1 0 0 1 12.2402 0)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    }
                />}
            </div>
        </div>
    );
}
export default CardItem;
