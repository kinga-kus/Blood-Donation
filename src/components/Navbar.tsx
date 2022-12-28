import React, { useState } from 'react';
import {
  AppBar,
  Container,
  Box,
  styled,
  Menu,
  MenuItem,
  Toolbar,
  Typography
} from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MenuIcon from '@mui/icons-material/Menu';
import logoImg from '../assets/logo.png';
import CustomButton from './CustomButton';

const NavLink = styled(Typography)(({ theme }) => ({
  fontSize: '14px',
  color: '#4F5361',
  '&:hover': {
    color: '#fff'
  }
}));

const NavbarLinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: theme.spacing(3),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const CustomMenuIcon = styled(MenuIcon)(({ theme }) => ({
  display: 'none',
  marginRight: theme.spacing(2),
  [theme.breakpoints.down('md')]: {
    display: 'block'
  }
}));

const NavbarContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: theme.spacing(5),
  [theme.breakpoints.down('md')]: {
    padding: theme.spacing(2)
  }
}));

const NavbarLogo = styled('img')(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}));

const Navbar = () => {
  return (
    <NavbarContainer>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '2.5rem'
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <CustomMenuIcon />
          <NavbarLogo src={logoImg} alt="logo" />
        </Box>
        <NavbarLinksBox>
          <NavLink variant="body2">Home</NavLink>
          <NavLink variant="body2">O Nas</NavLink>
          <NavLink variant="body2">Informacje</NavLink>
          <NavLink variant="body2">Kontakt</NavLink>
        </NavbarLinksBox>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}
      >
        <NavLink variant="body2">Zostań dawcą</NavLink>
        <CustomButton
          backgroundColor="#0F1B4C"
          color="#fff"
          buttonText="Rejestracja"
        />
      </Box>
    </NavbarContainer>
  );
};

export default Navbar;
