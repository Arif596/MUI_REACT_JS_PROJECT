import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";

export default function Rightbar() {

  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography sx={{ fontSize: "40px", textAlign: "center" }}>
          Online Friends
        </Typography>

        <AvatarGroup max={7}>
          <Avatar alt="Remy Sharp" src="/src/images/1n.jpg" />
          <Avatar alt="Travis Howard" src="/src/images/2n.jpg" />
          <Avatar alt="Cindy Baker" src="/src/images/3.jpg" />
          <Avatar alt="Agnes Walker" src="/src/images/4n.jpg" />
          <Avatar alt="Henderson" src="/src/images/5n.jpg" />
          <Avatar alt="Agnes young" src="/src/images/8n.jpg" />
          <Avatar alt="Trevor Henderson" src="/src/images/9n.jpg" />
          <Avatar alt="Henderson" src="" />
          <Avatar alt="Agnes young" src="" />
          <Avatar alt="Trevor Henderson" src="" />
        </AvatarGroup>
        <Typography sx={{ fontSize: "40px", textAlign: "center",mt:2,mb:2 }}>
          Latest Photo
        </Typography>
        <ImageList  cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
          </ImageListItem>
          <ImageListItem>
          <img src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" />           
          </ImageListItem>
          <ImageListItem>
          <img src= "https://images.unsplash.com/photo-1522770179533-24471fcdba45"/>
          </ImageListItem>
        </ImageList>
        <Typography sx={{ fontSize: "30px", textAlign: "center",mt:3,mb:3 }}>
          Latest Converstion
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/src/images/1n.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="/src/images/2n.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="/src/images/3new.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
}
