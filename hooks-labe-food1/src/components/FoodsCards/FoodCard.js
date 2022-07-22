import React from 'react'
import { DivCard, DivInfo } from './StyledFoodCard'

const FoodCard = ({product}) => {

  console.log(product)

  return (
    <DivCard>
      <img src={product?.photoUrl} alt={`Imagem de ${product?.name}`} />
      <DivInfo>
        <h2>{product?.name}</h2>
        <h4>{product?.description}</h4>
        <h1>R${product?.price},00</h1>
      </DivInfo>
    </DivCard>
  )
}

export default FoodCard