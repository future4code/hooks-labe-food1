import React, { useState, useEffect } from 'react';
import { DivHeader, StyledButtonHeader } from './StyledHeader';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate()
  const [showButton, setShowButton] = useState(true)
  useEffect (()=>{setShowButton (props.showButton)},[])
  return (
    <DivHeader>
      <h1></h1>
      {showButton ?
      <StyledButtonHeader onClick={()=> navigate(-1)} aria-label="delete">
        <ArrowBackIosIcon />
      </StyledButtonHeader>
    : <></>}
      <h1>{props.name}</h1>
      <h1></h1>
    </DivHeader>
  )
}

export default Header