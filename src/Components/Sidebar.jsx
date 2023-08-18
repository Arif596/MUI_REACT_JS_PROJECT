import {
  Box,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Switch,
} from "@mui/material";
import React, { useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import PagesIcon from "@mui/icons-material/Pages";
import GroupIcon from "@mui/icons-material/Group";
import StorefrontIcon from '@mui/icons-material/Storefront';
import Person2Icon from '@mui/icons-material/Person2';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import SettingsIcon from '@mui/icons-material/Settings';
// import LoginIcon from '@mui/icons-material/Login';
// import LockOpenIcon from '@mui/icons-material/LockOpen';
// import LogoutIcon from '@mui/icons-material/Logout';
import ModeNightIcon from '@mui/icons-material/ModeNight';
export default function Sidebar({setMode,mode}) {
  return (
    <Box
      
      flex={1}
      p={2}
      sx={{ display: { xs: "none", sm: "block" } }}
    >
      <Box position='fixed'>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home Page"></ListItemText>
        </ListItemButton>
      </List>
      <List  onClick={e=>setopenPages(true)}>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <PagesIcon />
          </ListItemIcon>
          <ListItemText primary=" Pages">
       
          </ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText primary="Groups"></ListItemText>
        </ListItemButton>
      </List>
      
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <StorefrontIcon />
          </ListItemIcon>
          <ListItemText primary="MarketPlace"></ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <PersonAddIcon />
          </ListItemIcon>
          <ListItemText primary="Friends"></ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Setting"></ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <Person2Icon />
          </ListItemIcon>
          <ListItemText primary="Profile"></ListItemText>
        </ListItemButton>
      </List>
      {/* <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <LoginIcon />
          </ListItemIcon>
          <ListItemText primary="Login"></ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <LockOpenIcon />
          </ListItemIcon>
          <ListItemText primary="SignUp"></ListItemText>
        </ListItemButton>
      </List>
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <LogoutIcon/>
          </ListItemIcon>
          <ListItemText primary="Logout"></ListItemText>
        </ListItemButton>
      </List> */}
      <List>
        <ListItemButton component="a" href="#">
          <ListItemIcon>
            <ModeNightIcon />
          </ListItemIcon>
          <Switch onChange={e=>setMode(mode === "light"?"dark":'light')}></Switch>
        </ListItemButton>
      </List>
      </Box>
    </Box>
  );
}
