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

    const newProductsCart = [];
    setProductsCart(newProductsCart)

    const id = 0
    const cartData = { newCart, id }
    setCartInLocalStorage(cartData, newProductsCart)
  }

  const setCartInLocalStorage = (cartData, productsCartData) => {
    const data = { cartData, productsCartData }
    localStorage.setItem("cart", JSON.stringify(data))
    localStorage.setItem("productsCart", JSON.stringify(data))
  }

  const getCartInLocalStorage = () => {
    const stringCart = localStorage.getItem("cart")
    const data = JSON.parse(stringCart)
    console.log('DATAAAAAAAAAAAA:', data)
    setCart(data.cartData.cart)
    setRestaurantCartId(data.cartData.restaurantCartId)
    setProductsCart(data.productsCartData)
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
