import React, { useContext } from "react";
import GlobalStateContext from "../../global/GlobalStateContext";
import { ContainerActiveOrder,CardText, StyledAccessTimeIcon  } from "./StyledActiveOrder";

const ActiveOrder = () => {
  const { order1} =
  useContext(GlobalStateContext);
  return (
    <ContainerActiveOrder>
      <StyledAccessTimeIcon style={{ color: "#fff" }} sx={{ fontSize: 35 }} />
      <CardText>
        <h1 style={{ color: "#fff" }} >Pedido em andamento</h1>
        <h1>{order1.restaurantName}</h1>
        <h3>SUBTOTAL R${order1.totalPrice}</h3>
      </CardText>
    </ContainerActiveOrder>
  );
};

export default ActiveOrder;
