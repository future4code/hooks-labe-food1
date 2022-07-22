import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
// styled
import {ContainerAdress} from './StyledCardAdress'

const CardAdress = () => {
  return (
    <ContainerAdress>
      <div>
        <h4>Endereço cadastrado</h4>
        <h1>Rua Alessandra Vieira, 42 - Santana</h1>
      </div>
      <div>
        <EditIcon/>
      </div>
    </ContainerAdress>
  )
}

export default CardAdress