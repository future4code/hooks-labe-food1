import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
// styled
import {ContainerAdress} from './StyledCardAdress'
import { goToEditAdress } from '../../routes/coordinators';
import { useNavigate,} from "react-router";

const CardAdress = () => {
  const navigate = useNavigate()
  return (
    <ContainerAdress>
      <div>
        <h4>Endereço cadastrado</h4>
        <h1>Rua Alessandra Vieira, 42 - Santana</h1>
      </div>
      <div onClick={() => goToEditAdress(navigate)}>
        <EditIcon/>
      </div>
    </ContainerAdress>
  )
}

export default CardAdress