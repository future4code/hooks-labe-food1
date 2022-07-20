import React from "react";
import Header from "../../components/Header/Header";
import {
  StyledButton,
  StyledDiv,
  StyledDivInput,
  DivInput,
  StyledInput,
} from "../../Styled";

const EditProfilePage = () => {
  return (
    <StyledDiv>
      <Header name='Editar' />
      <form>
        <StyledDivInput>
          <DivInput>
            <StyledInput
              label={"Nome"}
              variant="outlined"
              placeholder="Bruna Oliveira"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"E-mail"}
              variant="outlined"
              placeholder="bruna_o@gmail.com"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"CPF"}
              variant="outlined"
              placeholder="333.333.333-33"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              title="Digite um CPF no formato: xxx.xxx.xxx-xx"
              required
            />
          </DivInput>

          <StyledButton color="primary" variant="contained">
            Salvar
          </StyledButton>
        </StyledDivInput>
      </form>
    </StyledDiv>
  );
};

export default EditProfilePage;
