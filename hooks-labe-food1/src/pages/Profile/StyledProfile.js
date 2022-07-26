import styled from "styled-components";

export const Text = styled.h1`
  margin: 16px 16px 8px;
  align-self:flex-start;
  
`;
export const Line = styled.div`
  width: 328px;
  margin: 0 0 7px;
  border-top: solid 1px #000;
  overflow-y: scroll;
 

  ::-webkit-scrollbar {
    display: none;
    }

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

export const ContainerText = styled.div`
  width: 328px;
  /* margin: 0 16px 8px; */
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: start;

`;

export const NameDiv = styled.div`
  display: flex;
  flex-direction:column;
  justify-content: flex-start;
  align-items: start;
  
  h1{
    margin-bottom:8px
  }
`;