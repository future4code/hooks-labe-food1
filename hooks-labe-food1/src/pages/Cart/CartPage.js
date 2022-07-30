import { Container } from "@mui/system";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import ActiveOrder from "../../components/activeOrder/ActiveOrder";
import CardAdress from "../../components/cardAdress/CardAdress";
import FoodCard from "../../components/FoodsCards/FoodCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Payment from "../../components/Payment/Payment";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { StyledBody, StyledDiv } from "../../Styled";
import { Line, ContainerPag, SubTotal } from "./StyledCar";

const CartPage = () => {
  const { cart, setCart, productsCart, setProductsCart,
  restaurantCartId, setRestaurantCartId } = useContext(GlobalStateContext)

  useProtectedPage();

  // useEffect(() => {

  // }, [])

    const renderProducts = productsCart?.map(product => {
      return <FoodCard key={product.id} product={product} 
      restaurantId={restaurantCartId} />
    })


console.log('productsCart:', productsCart)
  console.log("cartPage:", cart,'\nid:', restaurantCartId)

  return (
    <StyledDiv>
      <Header name='Carrinho' haveButton={false} />
      <StyledBody>
        <CardAdress />

        <ContainerPag>
          <h1>Frete R$6,00</h1>
          <SubTotal>
            <h1>SUBTOTAL</h1>
            <h2>
              <b>R$67,00</b>
            </h2>
          </SubTotal>
        </ContainerPag>
        <Line>
          <h1>Forma de pagamento</h1>
        </Line>
        <Payment />
        {renderProducts}
        {/* <ActiveOrder/> */}
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default CartPage;
