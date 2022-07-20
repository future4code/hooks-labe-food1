import React, { useContext } from 'react'
import RestaurantsCards from '../../components/RestaurantsCards/RestaurantsCards'
import GlobalStateContext from '../../global/GlobalStateContext'
import { StyledDiv } from '../../Styled'

const FeedPage = () => {
  const restaurantsList = useContext(GlobalStateContext)
  console.log(restaurantsList)
  

  return (
    <StyledDiv>
      <RestaurantsCards/>
    </StyledDiv>
  )
}

export default FeedPage