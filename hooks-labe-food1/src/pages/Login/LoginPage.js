import React from "react";
import axios from "axios";
import { useNavigate,} from "react-router";
import { useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useForm from "../../hooks/useForm";
import { goToFeed, goToSignUp } from "../../routes/coordinators";
import { BASE_URL } from "../../constants/BASE_URL.js";
import {
  StyledDivInput,
  StyledDiv,
  StyledButton,
  StyledInput,
  DivInput,
  DivButton,
  StyledInputsenha,
  DivH1
} from "../../Styled";
import { LogoSvg } from "../../Styled";
import logo from "../../assets/logo-future-eats-invert.svg";


const LoginPage = () => {
  const [values, setValues] = useState({
    showPassword: false,
  })

  const {form, handleInputChange, clear} = useForm({ email: "", password: "" })
  const navigate = useNavigate()

  const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
};

const handleMouseDownPassword = (event) => {
    event.preventDefault();
};


const onSubmitForm = (event) => {
  event.preventDefault()
  console.log(form)
  axios.post(`${BASE_URL}/login`, form)
    .then(res => {
      localStorage.setItem("token", res.data.token)
      goToFeed(navigate)
    })
    .catch(err => console.log(err.message)) 
};

  return (
    <StyledDiv>
      <LogoSvg src={logo} />
      <DivH1>
        <h1>Entrar</h1>
      </DivH1>
      <form onSubmit={onSubmitForm}>
        <StyledDivInput>
          <DivInput>
            <StyledInput
              name="email"
              value={form.email}
              onChange={handleInputChange}
              label={"E-mail"}
              variant="outlined"
              placeholder="email@email.com"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInputsenha
              name="password"
              value={form.password}
              onChange={handleInputChange}
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
            <StyledButton color="primary" variant="contained" type={"submit"}>
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
