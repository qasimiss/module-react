import CardItem from "../components/card-item";
import Header from "../components/app-header/header";
import { useParams } from "react-router-dom";
import {products} from "../services/menu";

const About = () => {
    const params = useParams()
    let id = params.id
    let {url, title, descr, price, weight} = products[id-1]
    
    return (
        <div className="about">
            <div className="container">
                <Header back basket/>
                <CardItem
                    add
                    gramm
                    id = {id}
                    url = {`../${url}`}
                    title = {title}
                    descr = {descr}
                    price = {price}
                    weight = {weight}
                />
            </div>
        </div>
        
       
        
    )
}

export default About;