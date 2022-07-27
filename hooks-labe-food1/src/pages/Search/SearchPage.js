import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import { StyledBody, StyledDiv } from "../../Styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Search } from "../../components/SearchBar/StyledSearch"
import { InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import {goToSearch} from "../../routes/coordinators";
import { useNavigate } from "react-router-dom";
import {RestaurantsCards} from "../../components/RestaurantsCards/RestaurantsCards";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToRestaurant } from "../../routes/coordinators";
import { ContainerDiv, TextDiv } from "../../components/RestaurantsCards/StyledRestaurantsCards";
import useRequestData from "../../hooks/useRequestData";

function SearchPage() {
  const { data, isLoading } = useRequestData([], `${BASE_URL}/restaurants`);
  const { restaurants } = data;
  const [searchItem, setSearchItem] = useState("");
  const navigate = useNavigate()
  const handleChange = (e) => {
    setSearchItem(e.target.value);
    filterByText();
  };
  const filterByText = () => {
    const filteredArray = restaurants?.filter((item) => {
      return item.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (filteredArray?.length === 0) {
      return (<div>Não Encontramos</div>)
      
    } else {
      return (filteredArray?.map((item)=> {
        return <ContainerDiv onClick={() => goToRestaurant(navigate, item.id)} >
        <img src={item.logoUrl} />
        <h2>{item.name}</h2>
        <TextDiv>
          <h4>{item.deliveryTime} min</h4>
          <h4>Frete R${item.shipping},00</h4>
        </TextDiv>
      </ContainerDiv>
      }))
    }
  };
  return (
    <StyledDiv>
    <Header name="Busca"/>
    <StyledBody>
      <Search>
      <TextField
        variant="outlined"
        size="medium"
        value={searchItem}
        type="text"
        name="restaurant"
        placeholder="Restaurante"
        onChange={handleChange}
        required
        style={{ margin: "8px 0 0 0", width: "100%" }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlined />
            </InputAdornment>
          ),
        }}
      />
      {searchItem && filterByText()}
    </Search>
    </StyledBody>
    <Footer />
    </StyledDiv>
    
  );
}

export default SearchPage;