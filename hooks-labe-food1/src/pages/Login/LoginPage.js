import React from "react";
import { useNavigate,} from "react-router";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { goToSignUp } from "../../routes/coordinators";
import {
  StyledDivInput,
  StyledDiv,
  StyledButton,
  StyledInput,
  DivInput,
  DivButton,
  StyledInputsenha
} from "../../Styled";
import { LogoSvg } from "../../Styled";
import logo from "../../assets/logo-future-eats-invert.svg";
import { DivH1 } from "./StyledLoginPage";

const LoginPage = () => {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
});
  const navigate = useNavigate();

  const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};

  return (
    <StyledDiv>
      <LogoSvg src={logo} />
      <DivH1>
        <h1>Entrar</h1>
      </DivH1>
      <form>
        <StyledDivInput>
          <DivInput>
            <StyledInput
              label={"E-mail"}
              variant="outlined"
              placeholder="email@email.com"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInputsenha
              label={"senha"}
              variant="outlined"
              placeholder="Mínimo 6 caracteres"
              pattern={"^.{6,}"}
              title={"A senha deve ter no mínimo 6 caracteres"}
              required
              type={values.showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                    <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                    >
                        {values.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
            }
            />
          </DivInput>
            <StyledButton color="primary" variant="contained">
              Entrar
            </StyledButton>
        </StyledDivInput>
      </form>
      <DivH1>
        <h1>
          Não possui cadastro?{" "}
          <a onClick={() => goToSignUp(navigate)}>Clique aqui!</a>
        </h1>
      </DivH1>
    </StyledDiv>
  );
};

export default LoginPage;
