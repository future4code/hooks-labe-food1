import React from 'react'
import Header from '../../components/Header/Header'
import {
  DivH1, DivInput, StyledDiv,
  StyledDivInput, StyledInput, StyledButton
} from '../../Styled'

const RegisterAdressPage = () => {


  return (
    <StyledDiv>
      <Header />
      <DivH1>
        <h1>Meu endereço</h1>
      </DivH1>
      <form>
        <StyledDivInput>
          <DivInput>
            <StyledInput
              id="outlined-required"
              label={"Logradouro"}
              variant="outlined"
              placeholder="Rua / Av"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              id="outlined-required"
              label={"Número"}
              variant="outlined"
              placeholder="Número"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"Complemento"}
              variant="outlined"
              placeholder="Apto. / Bloco"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"Bairro"}
              variant="outlined"
              placeholder="Bairro"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"Cidade"}
              variant="outlined"
              placeholder="Cidade"
              required
            />
          </DivInput>
          <DivInput>
            <StyledInput
              label={"Estado"}
              variant="outlined"
              placeholder="Estado"
              required
            />
          </DivInput>
          <StyledButton color="primary" variant="contained">
            Salvar
          </StyledButton>
        </StyledDivInput>
      </form>
    </StyledDiv>
  )
}

export default RegisterAdressPage