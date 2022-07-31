import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  
} from "@mui/material";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import GlobalStateContext from "../../global/GlobalStateContext";
import { goToFeed } from "../../routes/coordinators";
import { StyledButton } from "../../Styled";
import { ContainerPayment } from "./StyledPayment";

const Payment = () => {
  const [i, setI] = useState(0)
  const [paymentValue, setPaymentValue] = useState("money");
  const { cart, setCart, restaurantCartId, clearCart } = useContext(GlobalStateContext);

  const navigate = useNavigate();


  useEffect(()=> {
    setI(i+1)
    setPaymentCart()
    console.log("Payment", paymentValue, i);
  }, [paymentValue])


  const onClickPlaceOrder = (event) => {
    event.preventDefault();
    const url = `${BASE_URL}/restaurants/${restaurantCartId}/order`;
    const headers = {
      headers: {
        auth: localStorage.getItem("token"),
      },
    };
    axios
      .post(url, cart, headers)
      .then((response) => {
        alert("Seu pedido foi realizado com sucesso !");
        clearCart()
        goToFeed(navigate)
      })
      .catch((error) => {
        alert(error.response);
      });
    // console.log("Payment", cart);
  };

  const handleChange = (event) => {
    setPaymentValue(event.target.value);
    
  };

  const setPaymentCart = (payment) => {
    const newCart = { ...cart, paymentMethod: paymentValue };
    setCart(newCart);
    console.log("NewCart", newCart)
  };

  return (
    <ContainerPayment>
      <form onSubmit={onClickPlaceOrder }>
        <FormControl>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={paymentValue}
            onChange={handleChange}
          >
            <FormControlLabel
              value="money"
              control={<Radio />}
              label="Dinheiro"
              // onClick={() => setPaymentValue }
            />
            <FormControlLabel
              value="creditcard"
              control={<Radio />}
              label="Cartão de crédito"
            />
          </RadioGroup>
        </FormControl>

        <StyledButton
          color="primary"
          variant="contained"
          type="submit"
        >
          Confirmar
        </StyledButton>
      </form>
    </ContainerPayment>
  );
};

export default Payment;
