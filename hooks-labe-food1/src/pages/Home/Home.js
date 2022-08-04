import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { goToFeed, goToLogin } from "../../routes/coordinators";
import logo from "../../assets/logo-future-eats.png";
import GlobalStateContext from "../../global/GlobalStateContext";
import { HomeDiv, LogoImg } from "./StyledHome";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    checkLoggedIn();
  }, []);

  const checkLoggedIn = () => {
    if (localStorage.getItem("token") !== null) {
      goToFeed(navigate);
    } else {
      goToLogin(navigate);
    }
  };

  return (
    <HomeDiv>
      <LogoImg src={logo} alt="logo Rappi4" />
    </HomeDiv>
  );
};

export default Home;
