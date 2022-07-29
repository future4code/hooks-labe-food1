import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [categorySelected, setCategorySelected] = useState("");
  const restaurantsList = useRequestData([], `${BASE_URL}/restaurants`);
  const [restaurantDetails, setRestaurantDetails] = useState({})
  const [cart, setCart] = useState(
    {
    products: [],
    paymentMethod: ""
  })
  const [restaurantCartId, setRestaurantCartId] = useState(0)
  
  useEffect(() => {
    clearCart()
    getCartInLocalStorage()
    console.log('GlobalState cart', cart)
  }, [])


  const clearCart = () => {
    const newCart = {
      products: [],
    paymentMethod: ""
    };
    setCart(newCart);
    setRestaurantCartId('')
    setCartInLocalStorage({cart: newCart, restaurantCartId: ''})
  }

  const setCartInLocalStorage = (cartData) => {
    localStorage.setItem("cart", JSON.stringify(cartData))
  }

  const getCartInLocalStorage = () => {
    const stringCart = localStorage.getItem("cart")
    const cartData = JSON.parse(stringCart)
    setCart(cartData.cart)
    setRestaurantCartId(cartData.restaurantCartId)
  };

  return (
    <GlobalStateContext.Provider
      value={{ categorySelected, setCategorySelected, restaurantsList, 
        cart, setCart, setCartInLocalStorage, clearCart, 
        restaurantCartId, setRestaurantCartId }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
