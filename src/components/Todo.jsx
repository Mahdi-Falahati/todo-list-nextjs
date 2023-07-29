"use client";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import { purple } from "@mui/material/colors";
// icons
import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";

export default function Todo() {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <TextField
        {...register("todo", { required: true })}
        id="outlined-basic"
        label="Write Your Todo..."
        variant="outlined"
        fullWidth
      />
      <AddTodoButton
        type="submit"
        endIcon={<PlaylistAddIcon />}
        variant="contained"
      >
        Add Todo
      </AddTodoButton>
    </form>
  );
}

const AddTodoButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
  letterSpacing: "2px",
  borderRadius: "10px",
  transition: "all 1s",
  width: "160px",
  "&:hover": {
    backgroundColor: purple[700],
    transform: "scale(1.1,1)",
  },
}));
