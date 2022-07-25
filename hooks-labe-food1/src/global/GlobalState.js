import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { BASE_URL } from "../constants/BASE_URL";
import useRequestData from "../hooks/useRequestData";
import GlobalStateContext from "./GlobalStateContext";

const GlobalState = (props) => {
  const [categorySelected, setCategorySelected] = useState("");


  return (
    <GlobalStateContext.Provider
      value={{ categorySelected, setCategorySelected }}
    >
      {props.children}
    </GlobalStateContext.Provider>
  );
};

export default GlobalState;
