import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import React from "react";
import { goToCart, goToFeed, goToPerfil } from "../../routes/coordinators";
import { useNavigate,} from "react-router";
import {FooterDiv, StyledPaper } from './StyledFooter'
import {StyledDiv} from '../../Styled'

const Footer = () => {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate()

  return (
    <StyledPaper >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={() => goToFeed(navigate)} icon={<HouseOutlinedIcon />} />
        <BottomNavigationAction onClick={() => goToCart(navigate)}icon={<ShoppingCartOutlinedIcon />} />
        <BottomNavigationAction onClick={() => goToPerfil(navigate)}icon={<PermIdentityIcon />} />
      </BottomNavigation>
    </StyledPaper >
  );
};

export default Footer;
