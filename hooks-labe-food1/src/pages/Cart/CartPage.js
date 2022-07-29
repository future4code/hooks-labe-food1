import { Container } from "@mui/system";
import React, { useContext } from "react";
import ActiveOrder from "../../components/activeOrder/ActiveOrder";
import CardAdress from "../../components/cardAdress/CardAdress";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Payment from "../../components/Payment/Payment";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../global/GlobalStateContext";
import useRequestData from "../../hooks/useRequestData";
import { StyledBody, StyledDiv } from "../../Styled";
import { Line, ContainerPag, SubTotal } from "./StyledCar";

const CartPage = () => {
  const { cart, setCart, restaurantCartId, setRestaurantCartId } = useContext(GlobalStateContext)

  // const { data, isLoading } = useRequestData({}, `${BASE_URL}/restaurants/${restaurantCartId}`)
  // const { restaurant } = data

  // const renderCart = restaurant.map(product => {
  //   const idProductCart = cart?.products?.find()
  //   if()
  // })
  console.log("PAGINA CARRINHO:", cart)

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
        {/* <ActiveOrder/> */}
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default CartPage;
