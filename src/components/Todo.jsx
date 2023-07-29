"use client";
import { useForm } from "react-hook-form";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

import { styled } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
// icons
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import NotesIcon from '@mui/icons-material/Notes';

export default function Todo() {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <BoxWrapper my={5}>
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <NotesIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            {...register("todo", { required: true })}
            id="todo-input"
            label="Write Your Todo..."
            variant="standard"
            sx={{
              width: "300px",
            }}
          />
        </Box>
        <AddTodoButton
          type="submit"
          endIcon={<PlaylistAddIcon />}
          variant="contained"
        >
          Add Todo
        </AddTodoButton>
      </BoxWrapper>
    </form>
  );
}

const BoxWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  alignItems: "center",
}));

const AddTodoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  letterSpacing: "2px",
  borderRadius: "10px",
  transition: "all 1s",
  width: "160px",
  margin: "0px 20px",
  "&:hover": {
    backgroundColor: purple[700],
    transform: "scale(1.1,1)",
  },
}));
