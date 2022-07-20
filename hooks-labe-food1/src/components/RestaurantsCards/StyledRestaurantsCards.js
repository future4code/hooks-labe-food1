import styled from "styled-components";

export const ContainerDiv = styled.div`
  width: 328px;
  height: 188px;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;

  img {
    width: 328px;
    height: 120px;
    margin: 0 0 12px;
    object-fit: contain;
    border-radius: 8px 8px 0 0;
  }
  h2 {
    width: 296px;
    height: 18px;
    margin: 0 16px 4px;
  }
`;

export const TextDiv = styled.div`
   width: 100%;
   height: 18px;
   display: flex;
   justify-content: space-between;
   padding: 0 16px;
   margin: 4px 0 0 0px;
`;
