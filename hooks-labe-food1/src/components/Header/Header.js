import React from 'react';
import { DivHeader, StyledButtonHeader } from './StyledHeader';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Header = (props) => {
  return (
    <DivHeader>
      <StyledButtonHeader aria-label="delete">
        <ArrowBackIosIcon />
      </StyledButtonHeader>
      <h1>{props.name}</h1>
    </DivHeader>
  )
}

export default Header