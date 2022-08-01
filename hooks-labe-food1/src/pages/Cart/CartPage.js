import React, { useContext, useEffect, useState } from "react";
import CardAdress from "../../components/cardAdress/CardAdress";
import DeliveryAddress from "../../components/deliveryAddress/DeliveryAddress";
import FoodCard from "../../components/FoodsCards/FoodCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Payment from "../../components/Payment/Payment";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import useRequestData from "../../hooks/useRequestData";
import { StyledBody, StyledDiv } from "../../Styled";
import { Line, ContainerPag, SubTotal, DivRender } from "./StyledCar";

const CartPage = () => {
  const {
    
    cart,
    setCart,
    productsCart,
    setProductsCart,
    restaurantCartId,
    setRestaurantCartId,
    clearCart,
  } = useContext(GlobalStateContext);
  let soma = 0;
  const dataRestaurant = useRequestData([], `${BASE_URL}/restaurants`);
  const { restaurants } = dataRestaurant?.data;

  useProtectedPage();

  const renderProducts = productsCart?.map((product) => {
    const checkCart = cart?.products?.find((item) => {
      if (item.id === product?.id) {
        soma += product.price * item.quantity;
      }
    });
    return (
      <FoodCard
        key={product.id}
        product={product}
        restaurantId={restaurantCartId}
      />
    );
  });

  const restaurant = restaurants && restaurants.find((item, index) => {
    if (item.id === restaurantCartId) {
      return true;
    }
  });

  return (
    <StyledDiv>
      <Header name="Carrinho" haveButton={false} />
      <StyledBody>
        <CardAdress />
        {cart?.products?.length && <DeliveryAddress restaurant={restaurant} />}
        {cart?.products?.length ? (
          <DivRender>{renderProducts}</DivRender>
        ) : (
          <h1>Carrinho Vazio</h1>
        )}
        <ContainerPag>
          {cart?.products?.length && <h1>Frete R${restaurant?.shipping},00</h1>}
          <SubTotal>
            <h1>SUBTOTAL</h1>
            {cart?.products?.length ? (
              <h2>
                <b>R${(soma + restaurant?.shipping).toFixed(2)}</b>
              </h2>
            ) : (
              <h2>R$00,00</h2>
            )}
          </SubTotal>
        </ContainerPag>
        <Line>
          <h1>Forma de pagamento</h1>
        </Line>
        <Payment />
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default CartPage;
