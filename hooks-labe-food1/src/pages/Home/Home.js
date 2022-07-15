import React from "react";
//imagens
import logo from "../../assets/logo-future-eats.png";
//styled 
import { HomeDiv, LogoImg } from "./StyledHome";

const Home = () => {
  return (
    <HomeDiv>
      <LogoImg src={logo} alt="logo Rappi4" />
    </HomeDiv>
  );
};

export default Home;
