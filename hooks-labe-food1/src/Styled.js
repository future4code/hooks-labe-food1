import styled from "styled-components"
import { TextField, Button, OutlinedInput} from "@mui/material";

export const StyledDivInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 360px;
height: 640px;
margin: 0 auto;
border: 1px solid black;
justify-content: flex-start;
align-items:center;
`
export const DivInput = styled.div`
    width: 360px;
  height: 72px;
  padding: 0 16px 8px;
`
export const StyledInput = styled(TextField)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
`;

export const StyledInputsenha = styled(OutlinedInput)`
  width: 328px;
  height: 56px;
  margin: 8px 0 0;
  padding: 19px 48px 19px 16px;
  border-radius: 2px;
 
`;

export const StyledButton = styled(Button)`
width: 328px;
height: 42px;
padding: 12px 16px;
border-radius: 2px;
margin: 8px 16px 16px;

`;


export const LogoSvg= styled.img`
  width: 104px;
  height: 58px;
  margin: 88px 128px 16px;
  object-fit: contain;
  `