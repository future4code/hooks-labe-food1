import styled from "styled-components"
import { TextField, Button, OutlinedInput} from "@mui/material";

export const StyledDiv = styled.div`
display: flex;
flex-direction: column;
width: 360px;
height: 640px;
overflow: hidden;
margin: 0 auto;
border: 1px solid rgba(0, 0, 0, 0.25);
justify-content: flex-start;
align-items:center;
`
export const StyledBody = styled.div`
width: 100%;
height: 511px;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items:center;

`
export const StyledDivInput = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const DivOverflow = styled.div` 
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: flex-start;
  align-items:center;

/* Hide scrollbar for Chrome, Safari and Opera */
::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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

export const DivH1 = styled.div`
width: 360px;
height: 42px;
padding: 12px 32px;
`
