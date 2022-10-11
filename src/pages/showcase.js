import Header from "../components/app-header/header";
import Cards from "../components/cards";

function ShowCase() {
  return (
      <div className="container">
        <Header title="наша продукция" />
        <Cards />
      </div>
  );
}

export default ShowCase;