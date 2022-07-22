import React, { useState } from 'react'
import { useNavigate,} from "react-router";
import { BASE_URL } from '../constants/BASE_URL'
import useRequestData from '../hooks/useRequestData'
import GlobalStateContext from './GlobalStateContext'

const GlobalState = (props) => {
  //o return do userequestdata só retorna um estado
 


  return (
    <GlobalStateContext.Provider  >
      {props.children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalState