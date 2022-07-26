import React from "react";
// componente
import { ContainerDiv } from "./StyledOrderHistory";

const OrderHistory = ({ order }) => {
  const dateOrder = new Date(order?.createdAt);
  const meses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"];
  // console.log(dateOrder?.getFullYear())
  console.log(`${dateOrder.getDate()}/${dateOrder.getMonth()}/${dateOrder.getFullYear()}`);
  const dateString = (`${dateOrder.getDate()} ${meses[dateOrder.getMonth()]} ${dateOrder.getFullYear()}`)


  return (
    <ContainerDiv>
      <h2>{order?.restaurantName}</h2>
      <h1>{dateString}</h1>
      <h3>SUBTOTAL R${order?.totalPrice}0</h3>
    </ContainerDiv>
  );
};

export default OrderHistory;
