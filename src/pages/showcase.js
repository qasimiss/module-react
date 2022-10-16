import Header from "../components/app-header/header";
import Cards from "../components/cards";
// import {useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ShowCase() {
  let navigate = useNavigate()

  if (!localStorage.getItem("auth")) {
    setTimeout(() => {
      navigate("/auth")
  }, 1000)
  }
    
  return (
      <div className="container">
        <Header title="наша продукция" basket/>
        <Cards />
      </div>
  );
}

export default ShowCase;