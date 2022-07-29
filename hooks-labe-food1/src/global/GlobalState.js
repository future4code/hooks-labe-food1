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
  

  // const changeQuantity = (q) => {
  //   setProductQuantity(q)
  // }
  return (
    <GlobalStateContext.Provider
      value={{ categorySelected, setCategorySelected, restaurantsList, 
        cart, setCart }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
