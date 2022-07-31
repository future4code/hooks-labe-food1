import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import RestaurantHeaderDetail from '../../components/RestaurantHeaderDetail/RestaurantHeaderDetail'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import { DivOverflow, StyledDiv } from '../../Styled'
import ClipLoader from 'react-spinners/ClipLoader'
import RestaurantsCategory from '../../components/RestaurantsCategory/RestaurantsCategory'
import GlobalStateContext from '../../global/GlobalStateContext'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const RestaurantPage = () => {
  const { cart } = useContext(GlobalStateContext);
  const { restaurantId } = useParams()
  const foodCategoryList = []
  const { data, isLoading } = useRequestData({}, `${BASE_URL}/restaurants/${restaurantId}`)
  const { restaurant } = data

  useProtectedPage()
  
  useEffect(()=>{
    // console.log('RESTAURANTPAGE >carrinho', cart)
  }, [])

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
      {isLoading && <ClipLoader color={'#e86e5a'} size={150} />}
      <RestaurantHeaderDetail restaurant={restaurant} />
      <DivOverflow>
        {renderCategorys}
      </DivOverflow>
    </StyledDiv>
  )
}

export default RestaurantPage