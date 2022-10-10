import "./cards.scss";
import CardItem from "../card-item";
import {products} from "../../services/menu";

const Cards = ({addToBasket}) => {
    return (
        <div className="cards">

           {products.map((key) => {
                return(
                    <CardItem
                    addToBasket={addToBasket}
                    key={key.id}
                    url={key.url}
                    title={key.title}
                    descr={key.descr}
                    price={key.price}
                    weight={key.weight}
                    />
                )
            })}
            
        </div>   
    )
};
export default Cards;