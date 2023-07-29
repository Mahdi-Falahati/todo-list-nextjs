"use client";
import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

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
      <Button type="submit" variant="contained" color="primary">
        Add Todo
      </Button>
    </form>
  );
}
