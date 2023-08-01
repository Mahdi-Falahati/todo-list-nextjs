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
import { Box, Stack, TextField } from "@mui/material";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useDispatch } from "react-redux";
import { AddTodo } from "@/store/TodoSlice";
import { v4 as uuidv4 } from "uuid";

export default function FormDialog() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const { v4: uuidv4 } = require("uuid");

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleFormSubmit = (data) => {
    dispatch(AddTodo({ ...data, id: uuidv4(), complete: false }));
    reset();
    handleClose();
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ width: "200px", borderRadius: "15px" }}
        onClick={handleClickOpen}
        endIcon={<PlaylistAddIcon />}
      >
        Add Todo
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

        <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>
          <BoxWrapper
            my={5}
            sx={{ flexDirection: { xs: "column", sm: "row" } }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                flexDirection: "column",
              }}
            >
              <Stack
                sx={{
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <NotesIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
                <Box sx={{ flexDirection: "column" }}>
                  <TextField
                    {...register("title", {
                      required: {
                        value: true,
                        message: "Todo title is Required",
                      },
                    })}
                    id="todo-input-title"
                    label="Write Your Todo..."
                    variant="standard"
                    sx={widthStyle}
                  />
                  <Typography
                    color="error"
                    sx={{ letterSpacing: "2px", textAlign: "center" }}
                    variant="subtitle2"
                    display="block"
                    gutterBottom
                  >
                    {errors.title?.message}
                  </Typography>
                </Box>
              </Stack>
              <Box>
                <TextField
                  {...register("description", {
                    required: {
                      value: true,
                      message: "Todo Description is Required",
                    },
                  })}
                  id="todo-input-description"
                  label="Description"
                  multiline
                  rows={5}
                  variant="standard"
                  sx={widthStyle}
                />
                <Typography
                  color="error"
                  sx={{ letterSpacing: "2px", textAlign: "center" }}
                  variant="subtitle2"
                  display="block"
                  gutterBottom
                >
                  {errors.description?.message}
                </Typography>
              </Box>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={["MobileDatePicker"]}>
                  <DemoItem label="Duration">
                    <MobileDatePicker
                      {...register("duration", { required: true })}
                      sx={widthStyle}
                      defaultValue={dayjs("2022-04-17")}
                    />
                  </DemoItem>
                </DemoContainer>
              </LocalizationProvider>
            </Box>
          </BoxWrapper>
          <CenterElement>
            <AddTodoButton
              autoFocus
              color="inherit"
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

const widthStyle = {
  marginBottom: "20px",
  width: { xs: "250px", sm: "350px" },
};
