import React, { useState } from 'react'
import { BASE_URL } from '../constants/BASE_URL'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
    const [restaurantsList, setRestaurantsList] = useRequestData ([],`${BASE_URL}/restaurants`)

  return (
    <GlobalStateContext.Provider value={restaurantsList}  >
        {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState