import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import { StyledDiv } from '../../Styled'

const CartPage = () => {
  return (
    <StyledDiv>
      <Header showButton={false} name="Carrinho"/>
      <Footer/>
    </StyledDiv>
  )
}

export default CartPage