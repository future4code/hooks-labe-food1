import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import { ContainerPayment } from "./StyledPayment";

const Payment = () => {
  return (
    <ContainerPayment>
      <FormControl>
        <RadioGroup>
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Dinheiro"
          />
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Cartão de crédito"
          />
        </RadioGroup>
      </FormControl>
    </ContainerPayment>
  );
};

export default Payment;
