import { TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { StyledDivInput, StyledDiv, ButtonLindo } from "../../Styled";
import { LogoSvg } from "../../Styled";
import logo from "../../assets/logo-future-eats-invert.svg";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <LogoSvg src={logo} />
      <form>
        <StyledDivInput>
          <TextField
            variant="outlined"
            placeholder="Nome"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="E-mail"
            size="small"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
          />

          <TextField
            variant="outlined"
            placeholder="CPF"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
            inputProps={{pattern="([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})"}}
          />
          <TextField
            variant="outlined"
            placeholder="Senha"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
          />
          <TextField
            variant="outlined"
            placeholder="Confirmar"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
          />
          <Button color="primary" variant="contained">
            Criar
          </Button>
        </StyledDivInput>
      </form>
    </StyledDiv>
  );
};

export default SignUpPage;
