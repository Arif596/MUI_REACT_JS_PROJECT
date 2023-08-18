import { FavoriteBorder, MoreVert } from "@mui/icons-material";
import Favorite from "@mui/icons-material/Favorite";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import CardMedia from "@mui/material/CardMedia";

export default function Feed() {
  return (
    <Box flex={4} p={2}>
      <Card sx={{ maxWidth: "650px",margin:5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="/src/images/new.jpg"
              sx={{ bgcolor: "red" }}
            ></Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title="Exploring the Enchanting Beauty of the Jungle"
          subheader="August 16, 2023"
        />
        <CardMedia
          component="img"
          height="380px"
          image="/src/images/5.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            "Embark on a captivating journey through lush foliage and diverse
            ecosystems. Encounter exotic wildlife and discover hidden wonders
            amidst the vibrant greenery. Let nature's symphony enchant your
            senses in this untamed paradise."
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
        <Divider variant="inset" component="li" />

      </Card>
      <Card sx={{ maxWidth: "650px",margin:5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="/src/images/1.jpg"
              sx={{ bgcolor: "red" }}
            ></Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title="Urban Wonders: Cityscapes Alive with Energy"
          subheader="August 16, 2023"
        />
        <CardMedia
          component="img"
          height="350px"
          image="/src/images/2.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Dive into the heart of bustling metropolises, where skyscrapers
            touch the sky and cultures collide. Explore vibrant streets, savor
            local flavors, and embrace the vibrant rhythm of urban life
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: "650px",margin:5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="/src/images/3new.jpg"
              sx={{ bgcolor: "red" }}
            ></Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title="Mystical Mountains: Summiting Nature's Majesty"
          subheader="August 16, 2023"
        />
        <CardMedia
          component="img"
          height="380px"
          image="/src/images/4.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Conquer towering peaks and witness breathtaking panoramas. Traverse
            rugged terrain and experience the thrill of reaching new heights,
            surrounded by the majesty of ancient landscapes.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "green" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: "650px",margin:5 }}>
        <CardHeader
          avatar={
            <Avatar
              src="/src/images/1.jpg"
              sx={{ bgcolor: "red" }}
            ></Avatar>
          }
          action={
            <IconButton>
              <MoreVert />
            </IconButton>
          }
          title=" Tranquil Escapes: Serenity by the Seaside"
          subheader="August 16, 2023"
        />
        <CardMedia
          component="img"
          height="380px"
          image="/src/images/5.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "justify" }}
          >
            Immerse yourself in the calming embrace of coastal vistas. Feel the
            gentle caress of ocean breezes as you unwind on sandy shores, where
            the horizon meets endless possibilities.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "yellow" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Box>
  );
}
