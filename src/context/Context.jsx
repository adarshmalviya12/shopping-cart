import React, {createContext, useContext, useReducer} from "react";
import {cartReducer} from "./reducer";
import dummyData from "./dummyData.json";

const Cart = createContext();

const Context = ({children}) => {
 const [state, dispatch] = useReducer(cartReducer, {
  products: dummyData,
  cart: [],
 });

 return <Cart.Provider value={{state, dispatch}}>{children}</Cart.Provider>;
};

export default Context;

export const CartState = () => {
 return useContext(Cart);
};
