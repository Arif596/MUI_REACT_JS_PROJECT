import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Fab,
  Modal,
  Stack,
  TextField,
  Tooltip,
  Typography,
  styled,
} from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ImageIcon from "@mui/icons-material/Image";
import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const StyledModal = styled(Modal)({
  display: "flex",
  justifyContent: "center",
  alignItem: "center",
});
const UserBox = styled(Box)({
  display: "flex",
  alignItem: "center",
  gap: "10px",
  marginBottom: "20px",
  marginTop: "20px",
});
export default function Add() {
  const [open, setOpen] = useState(false);
  return (
    <Box>
      <Tooltip
        title="Add"
        sx={{ position: "fixed", bottom: 20, marginLeft: "30px" }}
        onClick={(e) => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        sx={{ marginTop: "150px" }}
        open={open}
        onClose={(e) => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={300} height={310} borderRadius={10} p={3} 
        backgroundColor="background.default" color={"text.primary"}>
          <Typography variant="h6" color="gray" sx={{ textAlign: "center" }}>
            Create Post
          </Typography>
          <UserBox>
            <Avatar src="src/images/3new.jpg" sx={{ width: 30, height: 30 }} />
            <Typography variant="span" fontWeight={600}>
              Arif jamal
            </Typography>
          </UserBox>
          <TextField
            sx={{ width: "100%" }}
            id="outlined-helperText"
            variant="filled"
            placeholder="whats on your mind"
          />
          <Stack direction="row" gap={2} mt={2} mb={2}>
            <EmojiEmotionsIcon color="primary" />
            <PersonAddIcon color="secondary" />
            <VideoCameraBackIcon color="success" />
            <ImageIcon color="error" />
          </Stack>
          <ButtonGroup fullWidth variant="contained"
          sx={{marginTop:'10px'}}>
            <Button>Post</Button>
            <Button sx={{width:'100%'}}>
              <CalendarMonthIcon />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </Box>
  );
}
