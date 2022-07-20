import React, { useContext } from 'react'
import RestaurantsCards from '../../components/RestaurantsCards/RestaurantsCards'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { StyledDiv } from '../../Styled'
import { useProtectedPage } from '../../hooks/useProtectedPage'

const FeedPage = () => {
  const restaurantsList = useContext(GlobalStateContext)
  
  useProtectedPage()

  console.log(restaurantsList)
  
  return (
    <StyledDiv>
      <Header name='Rappi4'/>
      <RestaurantsCards/>
    </StyledDiv>
  )
}

export default FeedPage