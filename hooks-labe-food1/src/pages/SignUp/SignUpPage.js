import React from "react";
import { useNavigate } from "react-router";
import { useState } from "react";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { goToRegisterAdressPage } from "../../routes/coordinators";
import {
  StyledDivInput,
  StyledDiv,
  StyledButton,
  StyledInput,
  DivInput,
  StyledInputsenha,
} from "../../Styled";
import { LogoSvg } from "../../Styled";
import logo from "../../assets/logo-future-eats-invert.svg";
import { DivH1 } from "./StyledSignUpPage";
import useForm from "../../hooks/useForm";
import { BASE_URL } from "../../constants/BASE_URL";
import axios from "axios";

const SignUp = () => {
  const [confirm, setConfirm] = useState("");
  const [formInput, handleInputChange] = useForm({
    name: "",
    email: "",
    cpf: "",
    password: "",
  });

  const [values, setValues] = useState({
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
  const onChangeConfirm = (event) => {
    setConfirm(event.target.value);
  };

  const onSubmitPostSignup = (event) => {
    event.preventDefault();
    console.log(confirm);
    if (formInput.password === confirm) {
      axios
        .post(`${BASE_URL}/signup`, formInput)
        .then((res) => {
          localStorage.setItem("token", res.data.token);
          alert("Usuário criado com sucesso!");
          goToRegisterAdressPage(navigate);
        })
        .catch((err) => {
          console.log(err.message);
          alert("CPF já cadastrato");
        });
    } else {
      alert("Senhas não são iguais !");
    }
  };

  return (
    <StyledDiv>
      <LogoSvg src={logo} />
      <DivH1>
        <h1>Cadastrar</h1>
      </DivH1>
      <form onSubmit={onSubmitPostSignup}>
        <StyledDivInput>
          <DivInput>
            <StyledInput
              label={"Nome"}
              name="name"
              value={formInput.name}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Nome e Sobrenome"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"E-mail"}
              name="email"
              value={formInput.email}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="email@email.com"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"CPF"}
              name="cpf"
              value={formInput.cpf}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="000.000.000-00"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInputsenha
              label={"senha"}
              name="password"
              value={formInput.password}
              onChange={handleInputChange}
              variant="outlined"
              placeholder="Mínimo 6 caracteres"
              pattern={"^.{6,}"}
              title={"A senha deve ter no mínimo 6 caracteres"}
              required
              type={values.showPassword ? "text" : "password"}
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
          <DivInput>
            <StyledInputsenha
              label={"senha"}
              name="passwordcheck"
              value={confirm}
              onChange={onChangeConfirm}
              variant="outlined"
              placeholder="Confirme a senha anterior"
              pattern={"^.{6,}"}
              // title={"Confirme a senha anterior"}
              required
              type={values.showPassword ? "text" : "password"}
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
          <StyledButton type="submit" color="primary" variant="contained">
            Criar
          </StyledButton>
        </StyledDivInput>
      </form>
    </StyledDiv>
  );
};

export default SignUp;
