import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import useRequestData from "../../hooks/useRequestData";
import { ContainerActiveOrder,CardText, StyledAccessTimeIcon  } from "./StyledActiveOrder";

const ActiveOrder = () => {
  const {data} = useRequestData({}, `${BASE_URL}/active-order`)
  console.log(data)
  return (
    <ContainerActiveOrder>
      <StyledAccessTimeIcon style={{ color: "#fff" }} sx={{ fontSize: 35 }} />
      <CardText>
        <h1 style={{ color: "#fff" }} >Pedido em andamento</h1>
        <h1>Bullguer Vila Madalena</h1>
        <h3>SUBTOTAL R$67,00</h3>
      </CardText>
    </ContainerActiveOrder>
  );
};

export default ActiveOrder;
