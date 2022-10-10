import Header from "../components/app-header/header";
import Cards from "../components/cards";
import { useBasket } from "../hooks/basket";
function ShowCase() {
  let [sum, items, addToBasket] = useBasket();
  return (
      <div className="container">
        <Header title="наша продукция" items={items} sum = {sum}/>
        <Cards addToBasket={addToBasket}/>
      </div>
  );
}

export default ShowCase;