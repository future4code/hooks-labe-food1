import React, { useContext, useState } from 'react'
import RestaurantsCards from '../../components/RestaurantsCards/RestaurantsCards'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { StyledInput, DivInput, StyledDiv, DivOverflow } from '../../Styled'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivCategory } from './StyledFeed'

const FeedPage = () => {
  const restaurantsList = useContext(GlobalStateContext)
  const categoryList = []
  const [categorySelected, setCategorySelected] = useState('')
  const [isSelected, setIsSelected] = useState(false)

  useProtectedPage()


  const renderRestaurants = restaurantsList.data?.restaurants.map(item => {
    return <RestaurantsCards key={item.id} restaurant={item} />
  })

  const renderRestaurantsCategory = restaurantsList.data?.restaurants.map(item => {
    if(item.category === categorySelected){
      return <RestaurantsCards key={item.id} restaurant={item} />
    }
  })

  const teste = restaurantsList.data?.restaurants.filter(item => {
    const categoryFind = categoryList?.find(category => {
      if(item.category === category){
        return true
      }
      })
    if(!categoryFind) {
      categoryList.push(item.category)
    }
  })

const selectCategory = (category) => {
  setCategorySelected(category)
  setIsSelected(!isSelected)
}

console.log('LISTA', categoryList)

  return (
    <StyledDiv>
      <Header name='Rappi4' />
      <DivInput>
        <StyledInput
          name="Busca"
          label={"Busca"}
          variant="outlined"
          placeholder="Restaurante"
          required
        />
      </DivInput>
      <DivCategory isSelected={isSelected}>
        {
          categoryList.map((item, index) => {
            return <button key={index} onClick={() => selectCategory(item)} >{item}</button>
          })
        }
      </DivCategory>
      <DivOverflow>
        {!categorySelected ? <>{renderRestaurants}</> : <>{renderRestaurantsCategory}</>}
      </DivOverflow>

    </StyledDiv>
  )
}

export default FeedPage