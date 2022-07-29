import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import RestaurantHeaderDetail from '../../components/RestaurantHeaderDetail/RestaurantHeaderDetail'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import { DivOverflow, StyledDiv } from '../../Styled'
import ClipLoader from 'react-spinners/ClipLoader'
import RestaurantsCategory from '../../components/RestaurantsCategory/RestaurantsCategory'

const RestaurantPage = () => {
  const { restaurantId } = useParams()
  const { data, isLoading } = useRequestData({}, `${BASE_URL}/restaurants/${restaurantId}`)
  const { restaurant } = data
  const foodCategoryList = []


  const createCategoryList = restaurant?.products.filter(item => {
    const categoryFind = foodCategoryList?.find(category => {
      if (item.category === category) {
        return true
      }
    })
    if (!categoryFind) {
      foodCategoryList.push(item.category)
    }
  })

  const renderCategorys = foodCategoryList?.map((category, index) => {
    return <RestaurantsCategory key={index} name={category} 
    products={restaurant?.products} restaurantId={restaurantId} />
  })


  return (
    <StyledDiv>
      <Header name="Restaurante" haveButton={true} />
      {isLoading && <ClipLoader color={'#e86e5a'} isLoading={isLoading} size={150} />}
      <RestaurantHeaderDetail restaurant={restaurant} />
      <DivOverflow>
        {renderCategorys}
      </DivOverflow>
    </StyledDiv>
  )
}

export default RestaurantPage