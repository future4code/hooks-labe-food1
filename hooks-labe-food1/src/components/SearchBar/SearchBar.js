import React, { useState } from "react";
import { Search } from "./StyledSearch";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";

const SearchBar = (props) => {
  const [searchItem, setSearchItem] = useState("");

  const handleChange = (e) => {
    setSearchItem(e.target.value);
    filterByText();
  };

  const filterByText = () => {
    const filteredArray = props.allRestaurants?.restaurants.filter((item) => {
      return item.name.toLowerCase().includes(searchItem.toLowerCase());
    });
    if (filteredArray.length === 0) {
      props.setSearch([{ id: "notFound" }]);
    } else {
      props.setSearch(filteredArray);
    }
  };
  return (
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
    </Search>
  );
};

export default SearchBar;
