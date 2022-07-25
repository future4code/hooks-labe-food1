import React from "react";
import Footer from "../../components/Footer/Footer";
import OrderHistory from "../../components/OrderHistory/OrderHistory";
import { StyledDiv } from "../../Styled";
import HeaderName from "../../components/Header/HeaderName";
import CardAdress from "../../components/cardAdress/CardAdress";
import { Text, Line, ContainerText, NameDiv } from "./StyledProfile";
import EditIcon from "@mui/icons-material/Edit";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/BASE_URL";
import { useNavigate,} from "react-router";
import { goToEditProfile } from "../../routes/coordinators";

const ProfilePage = () => {
  const navigate = useNavigate()
  const {data} = useRequestData({}, `${BASE_URL}/profile`)
  const {user} = data
  // console.log(user)

  return (
    <StyledDiv>
      <HeaderName name="Meu Perfil" />
      <ContainerText>
        <NameDiv>
          <h1>{user?.name}</h1>
          {/* user && user.name */}
          <div onClick={() => goToEditProfile(navigate)}>
            <EditIcon />
          </div>
        </NameDiv>
        <h1>{user?.email}</h1>
        <h1>{user?.cpf}</h1>
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
