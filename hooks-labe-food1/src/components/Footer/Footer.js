import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import React from "react";
import { goToCart, goToFeed, goToPerfil } from "../../routes/coordinators";
import { useNavigate } from "react-router";
import { FooterDiv, StyledPaper } from "./StyledFooter";

const Footer = () => {
  // const [value, setValue] = React.useState(0);
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {setValue(newValue);};
  const navigate = useNavigate();

  return (
    <StyledPaper>
      <BottomNavigation value={value} onChange={handleChange}>
        <BottomNavigationAction
          onClick={() => goToFeed(navigate)}
          icon={<HouseOutlinedIcon />}
          value="Home"
        />
        <BottomNavigationAction
          onClick={() => goToCart(navigate)}
          icon={<ShoppingCartOutlinedIcon />}
          value="Cart"
        />
        <BottomNavigationAction
          onClick={() => goToPerfil(navigate)}
          icon={<PermIdentityIcon />}
          value="Profile"
        />
      </BottomNavigation>
    </StyledPaper>
  );
};

export default Footer;
