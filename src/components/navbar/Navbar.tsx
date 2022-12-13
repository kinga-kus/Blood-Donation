import React, { useState } from "react";
import {
  AppBar,
  Box,
  styled,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import BloodtypeIcon from "@mui/icons-material/Bloodtype";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from '../../assets/logo.png';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SocialBox = styled(Box)({
  display: "flex",
  gap: 10,
});

const MenuBox = styled(Box)({
  display: "flex",
  gap: 30,
});

const MenuItems = [
  { Name: "O Nas", Link: "#" },
  { Name: "Informacje", Link: "#" },
  { Name: "Zostań dawcą", Link: "#" },
  { Name: "Kontakt", Link: "#"},
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <AppBar sx={{ background: "black" }}>
      <StyledToolbar>
        <SocialBox>
          <BloodtypeIcon />
          <Typography>Centrum Krwiodawstwa</Typography>
        </SocialBox>
        <MenuBox sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Typography sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </Typography>
          ))}
        </MenuBox>
        <MenuIcon
          sx={{
            color: "white",
            display: { xs: "block", sm: "block", md: "none" },
          }}
          onClick={() => setOpen(!open)}
        />
      </StyledToolbar>
      <Menu
        id="basic-menu"
        open={open}
        onClose={() => setOpen(!open)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Box sx={{ width: 350, height: "90vh" }}>
          {MenuItems.map((item) => (
            <MenuItem sx={{ cursor: "pointer", fontSize: "14px" }}>
              {item.Name}
            </MenuItem>
          ))}
        </Box>
      </Menu>
    </AppBar>
  );
};

export default Navbar;
