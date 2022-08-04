import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [categorySelected, setCategorySelected] = useState("");
  const [ restaurantList, setRestaurantList] = useState([])
   const [productsCart, setProductsCart] = useState([])
  const [cart, setCart] = useState({
    products: [],
    paymentMethod: ""
  })
  const [restaurantCartId, setRestaurantCartId] = useState(0)
  // const {data} = useRequestData({}, `${BASE_URL}/active-order`)
  // // const {order} = data
  const [order1, setOrder1] = useState({})
  

  console.log("restaurante global", restaurantList)

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
        categorySelected, setCategorySelected, restaurantList, setRestaurantList,
        cart, setCart, setCartInLocalStorage, getCartInLocalStorage,
        clearCart, productsCart, setProductsCart,
        restaurantCartId, setRestaurantCartId,  order1, setOrder1
      }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
