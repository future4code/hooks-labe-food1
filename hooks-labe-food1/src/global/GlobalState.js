import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [categorySelected, setCategorySelected] = useState("");
  const restaurantsList = useRequestData([], `${BASE_URL}/restaurants`);
  const [productsCart, setProductsCart] = useState([])
  const [cart, setCart] = useState(
    {
    products: [],
    paymentMethod: ""
  })
  const [restaurantCartId, setRestaurantCartId] = useState(0)
  
  useEffect(() => {
    clearCart()
    getCartInLocalStorage()
    console.log('GlobalState cart', cart, '\nid:', restaurantCartId)
  }, [])


  const clearCart = () => {
    const newCart = {
      products: [],
    paymentMethod: ""
    };
    setCart(newCart);
    setRestaurantCartId(0)
    setCartInLocalStorage({cart: newCart, restaurantCartId: 0})

    const newProductsCart = [];
    setProductsCart(newProductsCart)
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
