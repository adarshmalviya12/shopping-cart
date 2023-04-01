import React from "react";
import {CartState} from "../context/context";
import SingleProduct from "./SingelProduct";
import "./style.css";
import Filters from "./Filters";

const Home = () => {
 const {
  state: {products},
 } = CartState();

 return (
  <div className="home">
   <Filters />
   <div className="productContainer">
    {products.map((prod) => (
     <SingleProduct prod={prod} key={prod.id} />
    ))}
   </div>
  </div>
 );
};

export default Home;
