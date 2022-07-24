import React, { useContext, useState } from 'react'
import RestaurantsCards from '../../components/RestaurantsCards/RestaurantsCards'
import Header from '../../components/Header/Header'
import GlobalStateContext from '../../global/GlobalStateContext'
import { StyledInput, DivInput, StyledDiv, DivOverflow } from '../../Styled'
import { useProtectedPage } from '../../hooks/useProtectedPage'
import { DivCategory } from './StyledFeed'
import { BASE_URL } from '../../constants/BASE_URL'
import useRequestData from '../../hooks/useRequestData'
import { useNavigate } from 'react-router-dom'
import ClipLoader from 'react-spinners/ClipLoader'
import Footer from '../../components/Footer/Footer'
import SearchBar from '../../components/SearchBar/SearchBar'
import Filter from '../../components/SearchBar/Filter'


const FeedPage = () => {
  const {data, isLoading} = useRequestData([], `${BASE_URL}/restaurants`)
  const {restaurants} = data
  const categoryList = []
  const { categorySelected, setCategorySelected } = useContext(GlobalStateContext)
  const [isSelected, setIsSelected] = useState(false)
  const [filteredRestaurants, setFilteredRestaurants] = useState([])
  const [categoryFilter, setCategoryFilter] = useState(undefined)
console.log(data)
  useProtectedPage()

  const renderRestaurants = restaurants?.map(item => {
    return <RestaurantsCards key={item.id} restaurant={item} />
  })

  const renderRestaurantsCategory = restaurants?.map(item => {
    if (item.category === categorySelected) {
      return <RestaurantsCards key={item.id} restaurant={item} />
    }
  })

  const createCategoryList = restaurants?.filter(item => {
    const categoryFind = categoryList?.find(category => {
      if (item.category === category) {
        return true
      }
    })
  if (!categoryFind) {
     categoryList.push(item.category)
  }
  })

  const selectCategory = (category) => {
    setCategorySelected(category)
    setIsSelected(!isSelected)
  }


  return (
    <StyledDiv>
      <Header name='Rappi4' />
      <DivInput>
        <SearchBar setSearch={setFilteredRestaurants} allRestaurants={restaurants} categoryFilter={setCategoryFilter}/>
        {/* <StyledInput
          name="Busca"
          // label={"Busca"}
          variant="outlined"
          placeholder="Restaurante"
          required
        /> */}
      </DivInput>
      <DivCategory>
        {!categorySelected ? <></> : <button onClick={() => selectCategory("")} >Todos</button>}
        {
          categoryList.map((item, index) => {
            return <button key={index} onClick={() => selectCategory(item)} >{item}</button>
          })
        }
      </DivCategory>
      <DivOverflow>
        {isLoading && <ClipLoader color={'#e86e5a'} isLoading={isLoading} size={150} />}
        {!categorySelected ? <>{renderRestaurants}</> : <>{renderRestaurantsCategory}</>}
      </DivOverflow>
      <Footer/>
    </StyledDiv>
  )
}

export default FeedPage