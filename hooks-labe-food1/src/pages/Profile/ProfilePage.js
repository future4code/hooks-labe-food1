import React from "react";
import Footer from "../../components/Footer/Footer";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { StyledBody, StyledDiv } from "../../Styled";
import Header from "../../components/Header/Header";
import CardAdress from "../../components/cardAdress/CardAdress";
import { Text, Line, ContainerText, NameDiv } from "./StyledProfile";
import EditIcon from "@mui/icons-material/Edit";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import { useNavigate } from "react-router";
import { goToEditProfile } from "../../routes/coordinators";

const ProfilePage = () => {
  const navigate = useNavigate();
  const { data } = useRequestData({}, `${BASE_URL}/profile`);
  const { user } = data;
  // console.log(user)
  const dataOrders = useRequestData([], `${BASE_URL}/orders/history`);
  const { orders } = dataOrders.data;
  // console.log(orders)

  const renderOrders = orders?.map((item) => {
    return <OrderHistory order={item} />;
  });

  return (
    <StyledDiv>
      <Header />
      <StyledBody>
        <ContainerText>
          <NameDiv>
            <h1>{user?.name}</h1>
            {/* user && user.name */}
            <h1>{user?.email}</h1>
            <h1>{user?.cpf}</h1>
          </NameDiv>
          <div onClick={() => goToEditProfile(navigate)}>
            <EditIcon />
          </div>
        </ContainerText>
        <CardAdress />
        <Text>Histórico de pedidos</Text>
        <Line>{renderOrders}</Line>
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default ProfilePage;
