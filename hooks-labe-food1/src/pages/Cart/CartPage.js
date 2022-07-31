import React, { useContext, useEffect, useState } from "react";
import CardAdress from "../../components/cardAdress/CardAdress";
import DeliveryAddress from "../../components/deliveryAddress/DeliveryAddress";
import FoodCard from "../../components/FoodsCards/FoodCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Payment from "../../components/Payment/Payment";
import GlobalStateContext from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { StyledBody, StyledDiv } from "../../Styled";
import { Line, ContainerPag, SubTotal, DivRender } from "./StyledCar";

const CartPage = () => {
  const {
    restaurantsList,
    cart,
    setCart,
    productsCart,
    setProductsCart,
    restaurantCartId,
    setRestaurantCartId,
  } = useContext(GlobalStateContext);
  let soma = 0;

  useProtectedPage();

  // useEffect(()=>{
  //   getCartInLocalStorage()
  // }, [])

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

  const restaurant = restaurantsList?.data.restaurants?.find((item, index) => {
    if (item.id === restaurantCartId) {
      return true;
    }
  });

  console.log(restaurant);

  return (
    <StyledDiv>
      <Header name="Carrinho" haveButton={false} />
      <StyledBody>
        <CardAdress />
        {cart?.products.length && <DeliveryAddress restaurant={restaurant} />}
        {cart?.products.length ? (
          <DivRender>{renderProducts}</DivRender>
        ) : (
          <h1>Carrinho Vazio</h1>
        )}
        <ContainerPag>
          {/* <h1>{cart?.product.length ? Frete R$ 00}</h1> */}
          <h1>Frete R${restaurant?.shipping},00</h1>
          <SubTotal>
            <h1>SUBTOTAL</h1>
            {cart?.products.length ? (
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
        {/* <ActiveOrder/> */}
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default CartPage;
