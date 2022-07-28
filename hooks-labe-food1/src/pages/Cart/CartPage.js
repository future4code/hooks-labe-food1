import { Container } from "@mui/system";
import React from "react";
import ActiveOrder from "../../components/activeOrder/ActiveOrder";
import CardAdress from "../../components/cardAdress/CardAdress";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Payment from "../../components/Payment/Payment";
import { StyledBody, StyledDiv } from "../../Styled";
import { Line, ContainerPag, SubTotal } from "./StyledCar";

const CartPage = () => {
  return (
    <StyledDiv>
      <Header />
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
        <ActiveOrder/>
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default CartPage;
