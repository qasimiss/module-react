import Cart from "../components/cart/cart";
import Button from "../components/button/button";
import { useSelector } from "react-redux";
import Header from "../components/app-header/header";

function Trash() {
    const sum = useSelector(state => state.basket.pricesBasket)
    return (
        <div className="trash">
            <div className="container">
                <Header title ="корзина с выбранными товарами" back/>
                <Cart />
            </div>

            <footer className="trash__footer">
                <div className="container--min">
                    <div className="trash__order">
                        заказ на сумму: &ensp;<span className="trash__price"> {sum} ₽</span>
                    </div>
                    <Button 
                    color="light"
                    text="Оформить заказ"
                    />
                </div>
            </footer>
            
        </div>
        
    );
}

export default Trash;