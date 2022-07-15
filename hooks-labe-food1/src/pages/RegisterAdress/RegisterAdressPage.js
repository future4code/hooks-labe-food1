import React from 'react'
import Header from '../../components/Header/Header'
import { DivH1, DivInput, StyledDiv, 
  StyledDivInput, StyledInput, StyledButton } from '../../Styled'

const RegisterAdressPage = () => {


  return (
    <StyledDiv>
      <Header/>
      <DivH1>
        <h1>Entrar</h1>
      </DivH1>
      <StyledDivInput>
      <DivInput>
            <StyledInput
              id="outlined-basic"
              label="E-mail" //É o que coloca o nome pequeno na borda
              variant="outlined"
              placeholder="email@email.com"
              //defaultValue="Hello World" //Inicia com esse valor
              required
            />
          </DivInput>
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
    </StyledDiv>
  )
}

export default RegisterAdressPage