import React from 'react';
import { DivHeader, StyledButtonHeader, ButtontDiv } from './StyledHeader';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate } from 'react-router-dom';

const Header = (props) => {
  const navigate = useNavigate()

  return (
    <DivHeader>
      {props.haveButton &&
        <ButtontDiv>
          <StyledButtonHeader onClick={() => navigate(-1)} aria-label="delete">
            <ArrowBackIosIcon />
          </StyledButtonHeader>
        </ButtontDiv>}
      <h1>{props.name}</h1>
    </DivHeader>
  )
}

export default Header