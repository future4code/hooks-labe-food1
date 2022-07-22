import React from "react";
import Footer from "../../components/Footer/Footer";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { StyledDiv } from "../../Styled";
import Header from "../../components/Header/Header";
import CardAdress from "../../components/cardAdress/CardAdress";
import { Text, Line, ContainerText, NameDiv } from "./StyledProfile";
import EditIcon from "@mui/icons-material/Edit";

const ProfilePage = () => {
  return (
    <StyledDiv>
      <Header showButton={false} name="Meu Perfil" />
      <ContainerText>
        <NameDiv>
          <h1>Bruna Oliveira</h1>
          <div>
            <EditIcon />
          </div>
        </NameDiv>
        <h1>bruna_o@gmail.com</h1>
        <h1>333.333.333-33</h1>
      </ContainerText>
      <CardAdress />
      <Text>Histórico de pedidos</Text>
      <Line />
      <OrderHistory />
      <Footer />
    </StyledDiv>
  );
};

export default ProfilePage;
