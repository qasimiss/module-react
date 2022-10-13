import "./cards.scss";
import CardItem from "../card-item";
import {products} from "../../services/menu";
import { useNavigate } from "react-router-dom";


const Cards = () => {
    const navigate = useNavigate()
    const handleAbout = (id) => {
        navigate(`about/${id}`)
    }
    return (
        <div className="cards">

           {products.map((key) => {
                return(
                    <CardItem
                    plus
                    id = {key.id}
                    idx = {key.idx}
                    key = {key.id}
                    url = {key.url}
                    title = {key.title}
                    descr = {key.descr}
                    price = {key.price}
                    weight = {key.weight}
                    handleAbout = {() => handleAbout(key.id)}
                    />
                )
            })}
            
        </div>   
    )
};
export default Cards;