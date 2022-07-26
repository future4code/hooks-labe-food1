import styled from "styled-components";

export const Line = styled.div`
  width: 328px;
  height: 26px;
  margin-bottom: 8px;
  border-bottom: solid 1px #000;
  display: flex;
  flex-direction: row;
  justify-content:flex-start;
  align-items:center;

`;
export const ContainerPag = styled.div`
  display: flex;
  flex-direction: column;
  width: 328px;
  height: 52px;
  margin-bottom: 25px;
  justify-content: space-between;
  h1 {
    align-self: flex-end;
  }
`;

export const SubTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
