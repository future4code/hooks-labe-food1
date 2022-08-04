import React from 'react'
import { ContainerAddress } from './StyledDeliveryAddress'


const DeliveryAddress = ({restaurant}) => {
  return (
    <ContainerAddress>
    <div>
      <h2>{restaurant?.name}</h2>
      <h4>{restaurant?.address}</h4>
      <h4>{restaurant?.deliveryTime} min</h4>
    </div>
  </ContainerAddress>
  )
}

export default DeliveryAddress