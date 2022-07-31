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
  const [cart, setCart] = useState({
    products: [],
    paymentMethod: ""
  })
  const [restaurantCartId, setRestaurantCartId] = useState(0)

  useEffect(() => {
    if(localStorage.getItem("cart") === null){
      clearCart()
    }
    getCartInLocalStorage()
    // console.log('RENDERIZAÇÃO INICIAL prod:', productsCart)
  }, [])


  const clearCart = () => {
    const cart = {
      products: [],
      paymentMethod: ""
    };
    setCart(cart);
    setRestaurantCartId(0)
    setProductsCart([])

    setCartInLocalStorage(cart, 0 , [])
  }


  const setCartInLocalStorage = (cart, restaurantCartId, productsCart) => {
    const data = { cart, restaurantCartId, productsCart }
    localStorage.setItem("cart", JSON.stringify(data))
    console.log('SETLOCALSTORAE', productsCart)
  }


  const getCartInLocalStorage = () => {
    const stringData = localStorage.getItem("cart")
    const data = JSON.parse(stringData)

    setCart(data.cart)
    setRestaurantCartId(data.restaurantCartId)
    setProductsCart(data.productsCart)
    // productsCart estava com P maiusculo 
    console.log('GETLOCALSTORAGE prodCArt:', data)
  };

  return (
    <GlobalStateContext.Provider
      value={{
        categorySelected, setCategorySelected, restaurantsList,
        cart, setCart, setCartInLocalStorage, getCartInLocalStorage,
        clearCart, productsCart, setProductsCart,
        restaurantCartId, setRestaurantCartId
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
