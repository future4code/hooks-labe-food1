import styled from "styled-components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export const ContainerActiveOrder = styled.div`
  width: 360px;
  height: 118px;
  margin: 99px 0 49px;
  padding: 24px;
  background-color: #e86e5a;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  h1 {
    padding-bottom: 8px;
  }
 
 
`;
export const StyledAccessTimeIcon = styled(AccessTimeIcon)`
  margin: 2px 24px 0 0;
  object-fit: contain;
`;
