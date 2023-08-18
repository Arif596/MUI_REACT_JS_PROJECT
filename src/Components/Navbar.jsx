import {
  AppBar,
  Avatar,
  Badge,
  InputBase,
  Menu,
  MenuItem,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import PetsIcon from "@mui/icons-material/Pets";
import MailIcon from "@mui/icons-material/Mail";
import { Margin, Notifications } from "@mui/icons-material";

export default function Navbar() {
    const [open,setOpen]=useState(false)
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  const Search = styled("div")(({ theme }) => ({
    background: "white",
    padding: "0 10px",
    borderRadius: "7px",
    width: "40%",
  }));
  const Icons = styled("Box")(({ theme }) => ({
    display: "none", gap: "20px"
    , justifyContent: "center",alignItems:'center',
    [theme.breakpoints.up('sm')]:{
        display:'flex'
     }
  }));
  const Userbox = styled("Box")(({ theme }) => ({
    display: "flex", gap: "10px",
     justifyContent: "center",alignItems:'center',
     [theme.breakpoints.up('sm')]:{
        display:'none'
     }

  }));
  return (
    <AppBar position="sticky" sx={{ justifyContent: "center" }} >
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Arif Jamal
        </Typography>
        <PetsIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="Search..." />
        </Search>
        <Icons >
          <Badge badgeContent={10}>
            <MailIcon />
          </Badge>
          <Badge badgeContent={10}>
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, height: 30 }}
             src="/src/images/my.jpeg"
             onClick={e=>setOpen(true)}  
          />
        </Icons>
        <Userbox  onClick={e=>setOpen(true)} >
        <Avatar
            sx={{ width: 30, height: 30 }}
            src="/src/images/my.jpeg"
          />

        </Userbox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}
