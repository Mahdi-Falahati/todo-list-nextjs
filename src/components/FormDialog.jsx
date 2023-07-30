"use client";

import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import NotesIcon from "@mui/icons-material/Notes";
import { useState } from "react";
import {
  AddTodoButton,
  BoxWrapper,
  CenterElement,
  Transition,
} from "./customComponent";
import { Box, TextField } from "@mui/material";

export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open full-screen dialog
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative", background: "#4a148c" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Add Todo
            </Typography>
          </Toolbar>
        </AppBar>

        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <BoxWrapper
            my={5}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box sx={{ display: "flex", alignItems: "flex-end" }}>
              <NotesIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
              <TextField
                {...register("todo", { required: true })}
                id="todo-input"
                label="Write Your Todo..."
                variant="standard"
                sx={{
                  width: { xs: "250px", sm: "350px" },
                }}
              />
              
            </Box>
          </BoxWrapper>
          <CenterElement>
            <AddTodoButton
              autoFocus
              color="inherit"
              onClick={handleClose}
              type="submit"
              endIcon={<PlaylistAddIcon />}
              variant="contained"
            >
              Add Todo
            </AddTodoButton>
          </CenterElement>
        </form>
      </Dialog>
    </div>
  );
}
