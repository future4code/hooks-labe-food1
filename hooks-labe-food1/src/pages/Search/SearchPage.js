import { React, useContext, useState } from "react";
import TextField from "@mui/material/TextField";
import { StyledBody, StyledDiv } from "../../Styled";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Search } from "../../components/SearchBar/StyledSearch"
import { InputAdornment } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { goToRestaurant } from "../../routes/coordinators";
import { ContainerDiv, TextDiv } from "../../components/RestaurantsCards/StyledRestaurantsCards";
import GlobalStateContext from "../../global/GlobalStateContext";

function SearchPage() {
  const {restaurantsList } =
    useContext(GlobalStateContext);
  const { restaurants } = restaurantsList?.data;
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
        return <ContainerDiv key={item.id} onClick={() => goToRestaurant(navigate, item.id)} >
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
    <Header name="Busca" haveButton={true}/>
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