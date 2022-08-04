import React from 'react'
import EditIcon from "@mui/icons-material/Edit";
// styled
import {ContainerAdress} from './StyledCardAdress'
import { goToEditAdress } from '../../routes/coordinators';
import { useNavigate,} from "react-router";
import useRequestData from "../../hooks/useRequestData"
import { BASE_URL } from "../../constants/BASE_URL";

const CardAdress = () => {
  const navigate = useNavigate()
  const {data} = useRequestData({}, `${BASE_URL}/profile/address`)
  const {address} = data
  // console.log(address)

  return (
    <ContainerAdress>
      <div>
        <h4>Endereço cadastrado</h4>
        <h1>{address?.street}, {address?.number}  -  {address?.neighbourhood}</h1>
      </div>
      <div onClick={() => goToEditAdress(navigate)}>
        <EditIcon/>
      </div>
    </ContainerAdress>
  )
}

export default CardAdress