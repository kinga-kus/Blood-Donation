import React, { useState } from 'react';

import { Route, Routes } from 'react-router-dom';
import { Link as RegisterationLink } from 'react-router-dom';

import {
  AppBar,
  Container,
  Box,
  styled,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Link
} from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import MenuIcon from '@mui/icons-material/Menu';

import logoImg from '../../assets/logo.png';

import CustomButton from '../CustomButton';
import Operation from '../Registeration/RegisterSteps';

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: '14px',
  color: '#4F5361',
  '&:hover': {
    color: '#fff'
  }
}));

const NavbarLinks = [
  { label: 'Home', path: '#' },
  { label: 'O Nas', path: '#' },
  { label: 'Informacje', path: '#' },
  { label: 'Kontakt', path: '#' }
];

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
    <>
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
            {NavbarLinks.map((link) => (
              <NavLink href={link.path} underline="none" variant="body2">
                {link.label}
              </NavLink>
            ))}
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
          <Typography
            variant="body2"
            sx={{
              fontSize: '14px',
              color: '#4F5361'
            }}
          >
            Zostań dawcą
          </Typography>
          <RegisterationLink to="/rejestracja">
            <CustomButton
              backgroundColor="#0F1B4C"
              color="#fff"
              buttonText="Rejestracja"
            />
          </RegisterationLink>
        </Box>
      </NavbarContainer>
      <Routes>
        <Route path="/rejestracja" element={<Operation />} />
      </Routes>
    </>
  );
};

export default Navbar;