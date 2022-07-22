import React from "react";
import { ContainerDiv, TextDiv } from "./StyledHeader";

const HeaderName = (props) => {
  return (
    <ContainerDiv>
      <TextDiv>
        <h1>{props.name}</h1>
      </TextDiv>
    </ContainerDiv>
  );
};

export default HeaderName;
