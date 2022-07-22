import React from "react";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinators";
import { ContainerDiv, TextDiv } from "./StyledRestaurantsCards";

const RestaurantsCards = ({restaurant}) => {
  const navigate = useNavigate()
  
  return (
    <ContainerDiv onClick={() => goToRestaurant(navigate, restaurant.id)} >
      <img src={restaurant.logoUrl} />
      <h2>{restaurant.name}</h2>
      <TextDiv>
        <h4>{restaurant.deliveryTime} min</h4>
        <h4>Frete R${restaurant.shipping},00</h4>
      </TextDiv>
    </ContainerDiv>
  );
};

export default RestaurantsCards;
