import React, { useContext, useEffect, useState } from "react";
import RestaurantsCards from "../../components/RestaurantsCards/RestaurantsCards";
import Header from "../../components/Header/Header";
import GlobalStateContext from "../../global/GlobalStateContext";
import {
  StyledInput,
  DivInput,
  StyledDiv,
  DivOverflow,
  StyledBody,
} from "../../Styled";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { DivCategory } from "./StyledFeed";
import { BASE_URL } from "../../constants/BASE_URL";
import useRequestData from "../../hooks/useRequestData";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import Footer from "../../components/Footer/Footer";
import SearchBar from "../../components/SearchBar/SearchBar";
import { ContainerActiveOrder } from "../../components/activeOrder/StyledActiveOrder";
import ActiveOrder from "../../components/activeOrder/ActiveOrder";

const FeedPage = () => {
  const {
    categorySelected,
    setCategorySelected,
    restaurantList,
    setRestaurantList,
    cart,
    productsCart,
    order1,
    setOrder1,
  } = useContext(GlobalStateContext);
  const dataRestaurant = useRequestData([], `${BASE_URL}/restaurants`);
  const { restaurants } = dataRestaurant?.data;
  const categoryList = [];
  const [isSelected, setIsSelected] = useState(false);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [categoryFilter, setCategoryFilter] = useState(undefined);
  const { data } = useRequestData({}, `${BASE_URL}/active-order`);
  const { order } = data;

  useProtectedPage();

  useEffect(() => {
    setRestaurantList(restaurants);
    setOrder1(order);
  }, [order]);

  // useEffect(() => {
  //   setRestaurantList(restaurants);
  // }, []);

  const renderRestaurants = restaurants?.map((item) => {
    return <RestaurantsCards key={item.id} restaurant={item} />;
  });

  const renderRestaurantsCategory = restaurants?.map((item) => {
    if (item.category === categorySelected) {
      return <RestaurantsCards key={item.id} restaurant={item} />;
    }
  });

  const createCategoryList = restaurants?.filter((item) => {
    const categoryFind = categoryList?.find((category) => {
      if (item.category === category) {
        return true;
      }
    });
    if (!categoryFind) {
      categoryList.push(item.category);
    }
  });

  const selectCategory = (category) => {
    setCategorySelected(category);
    setIsSelected(!isSelected);
  };

  return (
    <StyledDiv>
      <Header name="Rappi4" haveButton={false} />
      <StyledBody>
        <DivInput>
          <SearchBar
            setSearch={setFilteredRestaurants}
            allRestaurants={restaurants}
            categoryFilter={setCategoryFilter}
          />
        </DivInput>
        <DivCategory>
          {!categorySelected ? (
            <></>
          ) : (
            <button onClick={() => selectCategory("")}>Todos</button>
          )}
          {categoryList.map((item, index) => {
            return (
              <button key={index} onClick={() => selectCategory(item)}>
                {item}
              </button>
            );
          })}
        </DivCategory>
        <DivOverflow>
          {restaurantList?.isLoading && (
            <ClipLoader color={"#e86e5a"} size={150} />
          )}
          {!categorySelected ? (
            <>{renderRestaurants}</>
          ) : (
            <>{renderRestaurantsCategory}</>
          )}
        </DivOverflow>
        {order1 && <ActiveOrder />}
      </StyledBody>
      <Footer />
    </StyledDiv>
  );
};

export default FeedPage;
