import "./cart.scss"
import { useSelector } from "react-redux"
import CardItem from "../card-item"
import { useNavigate } from "react-router-dom"

const Cart = () => {
    const navigate = useNavigate()
    const handleAbout = (id) => {
        navigate(`../about/${id}`)
    }
    const basket = useSelector((state) => state.basket.basket)
    return (
        <div className="cart">
            <div className="container--min">
                {basket.map((item) => {
                    return (
                        <CardItem
                            circle
                            id={item.id}
                            idx={item.idx}
                            url={`images/${item.url}`}
                            title={item.title}
                            price={item.price}
                            handleAbout={() => handleAbout(item.id)}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Cart
