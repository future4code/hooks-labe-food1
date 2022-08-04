import React from 'react'
import { DivHeader, TextDiv } from './StyledRestaurantHeaderDetail'

const RestaurantHeaderDetail = ({ restaurant }) => {
  return (
    <DivHeader>
      <img src={restaurant?.logoUrl} alt="Imagem do Restaurante" />
      <h2>{restaurant?.name}</h2>
      <h4>{restaurant?.category}</h4>
      <TextDiv>
        <h4>{restaurant?.deliveryTime} min</h4>
        <h4>Frete R${restaurant?.shipping},00</h4>
      </TextDiv>
      <h4>{restaurant?.address}</h4>
    </DivHeader>
  )
}

export default RestaurantHeaderDetail