import styled from "styled-components";

export const Text = styled.h1`
  margin: 16px 16px 8px;
  padding-right: 201px;
`;
export const Line = styled.hr`
  width: 328px;
  height: 1px;
  margin: 0 0 7px;
  border: solid 1px #000;
`;

export const ContainerText = styled.div`
  width: 328px;
  margin: 0 16px 8px;
  display:flex;
  flex-direction:column;
  align-items: start;
  h1{
    margin-bottom:8px
  }
`;

export const NameDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:  start;
`;