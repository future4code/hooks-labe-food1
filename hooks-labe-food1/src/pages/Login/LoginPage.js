import { TextField, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";
import { goToSignUp } from "../../routes/coordinators";
import { StyledDivInput, StyledDiv, ButtonLindo } from "../../Styled";
import { LogoSvg } from "../../Styled";
import logo from "../../assets/logo-future-eats-invert.svg";


const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <StyledDiv>
      <LogoSvg src={logo} />
      <form>
        <StyledDivInput>
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
            placeholder="Senha"
            required
            sx={{
              "& > :not(style)": { m: 1, width: "328px", height: "56px" },
            }}
          />
          <Button color="primary" variant="contained">Entrar</Button>
        </StyledDivInput>
      </form>
      <Button onClick={() => goToSignUp(navigate)}>
        Não possui cadastro? Clique aqui!
      </Button>
    </StyledDiv>
  );
};

export default LoginPage;
