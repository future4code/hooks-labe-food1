import React from 'react'
import { DivOverflow } from '../../Styled'
import FoodCard from '../FoodsCards/FoodCard'
import { DivCategory, DivContainer, DivRender } from './StyledRestaurantsCategory'

const RestaurantsCategory = ({ name, products, restaurantId }) => {

  const renderProductsByCategory = products.map(product => {
    if (product.category === name) {
      return <FoodCard key={product.id} product={product} 
      restaurantId={restaurantId} />
    }
  })

  return (
    <DivContainer>
      <DivCategory>
        <h1>{name}</h1>
      </DivCategory>
      <DivRender>
        {renderProductsByCategory}
      </DivRender>
    </DivContainer>
  )
}

export default RestaurantsCategory