import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [categorySelected, setCategorySelected] = useState("");
  const restaurantsList = useRequestData([], `${BASE_URL}/restaurants`);
  const [cart, setCart] = useState({
    products: [],
    paymentMethod: ""
  })
  const [restaurantCartId, setRestaurantCartId] = useState(0)
  
  const clearCart = () => {
    const newCart = {
      products: [],
    paymentMethod: ""
    };
    setCart(newCart);
    setRestaurantCartId('')
    console.log("carrinho resetado", cart)
  }

  return (
    <GlobalStateContext.Provider
      value={{ categorySelected, setCategorySelected, restaurantsList, 
        cart, setCart, clearCart, restaurantCartId, setRestaurantCartId }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
