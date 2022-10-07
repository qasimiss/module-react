import "./cards.scss";
import CardItem from "../card-item";
import {products} from "../../services/menu";

const Cards = () => {
    return (
        <div className="cards">
            <CardItem {...products[0]} />

            <CardItem {...products[1]} />

            <CardItem {...products[2]} />

            <CardItem {...products[3]} />

            <CardItem {...products[4]} />

            <CardItem {...products[5]} />

            <CardItem {...products[6]} />

            <CardItem {...products[7]} />

        </div>   
    )
};
export default Cards;