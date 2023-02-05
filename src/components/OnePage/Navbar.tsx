import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import {
  Container,
  Box,
  styled,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  MenuItem,
  Menu
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';

import Registeration from '../Registeration/Registeration';
import WhyWorth from './WhyWorth';

const pages = [
  { label: 'Home', path: '/Blood-Donation#home' },
  { label: 'About Us', path: '/Blood-Donation#mission' },
  { label: 'Information', path: '/Blood-Donation/information' },
  { label: 'Contact', path: '/Blood-Donation#contact' }
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

const NavLink = styled(Link)(({ theme }) => ({
  fontSize: '16px',
  color: '#EEE5E9',
  '&:hover': {
    color: '#fff'
  }
}));

const CustomContainer = styled(Container)(({ theme }) => ({
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

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between'
});

const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      <CustomContainer>
        <AppBar position="fixed" sx={{ backgroundColor: '#08415C' }}>
          <Container maxWidth="xl">
            <StyledToolbar disableGutters>
              <BloodtypeIcon
                sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
              />
              <Typography
                noWrap
                component="a"
                href="/Blood-Donation"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'Poppins',
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Blood Donation
              </Typography>
              <Box
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left'
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: 'block', md: 'none' }
                  }}
                >
                  {pages.map((page) => (
                    <MenuItem>
                      <HashLink
                        smooth
                        to={page.path}
                        style={{ textDecoration: 'none' }}
                      >
                        {page.label}
                      </HashLink>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Typography
                variant="h5"
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                Blood Donation
              </Typography>
              <NavbarLinksBox
                sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}
              >
                {pages.map((page) => (
                  <HashLink
                    smooth
                    to={page.path}
                    style={{
                      textDecoration: 'none',
                      color: '#EEE5E9',
                      fontFamily: 'Poppins'
                    }}
                  >
                    {page.label}
                  </HashLink>
                ))}
              </NavbarLinksBox>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '1rem'
                }}
              >
                <Link to="/registeration" style={{ textDecoration: 'none' }}>
                  <Button
                    variant="outlined"
                    sx={{
                      color: '#EEE5E9',
                      border: '1px solid #EEE5E9',
                      '&:hover': {
                        backgroundColor: '#EEE5E9',
                        boxShadow: 'none',
                        borderColor: '#EEE5E9',
                        color: '#08415C'
                      },
                      '&:active': {
                        boxShadow: 'none',
                        backgroundColor: '#EEE5E9'
                      }
                    }}
                  >
                    Become a donor
                  </Button>
                </Link>
              </Box>
            </StyledToolbar>
          </Container>
        </AppBar>
      </CustomContainer>
      <Routes>
        <Route path="/registeration" element={<Registeration />} />
        <Route path="/information" element={<WhyWorth />} />
      </Routes>
    </>
  );
};

export default Navbar;
