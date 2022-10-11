import "./cart.scss";
import { useSelector } from "react-redux";
import CardItem from "../card-item";

const Cart = () => {
    const basket = useSelector(state => state.basket.basket)
    console.log(basket);
    return(
        <div className="cart">
            <div className="container--min">
                {basket.map( item => {
                        return (
                            <CardItem
                            circle = {true}
                            url = {item.url}
                            title = {item.title}
                            price = {item.price}
                            />
                        )
                    })}
            </div>
            
        </div>
    )
}

export default Cart;