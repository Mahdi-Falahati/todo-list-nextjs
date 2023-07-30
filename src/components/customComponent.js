import styled from "@emotion/styled";
import { Box, Button, Slide, Stack } from "@mui/material";
import { forwardRef } from "react";

export const BoxWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AddTodoButton = styled(Button)(() => ({
  position: "absolute",
  bottom: "80px",
  backgroundColor: "#4a148c",
  color: "#fff",
  letterSpacing: "2px",
  borderRadius: "10px",
  transition: "all 1s",
  padding: "7px 80px",
  "&:hover": {
    backgroundColor: "#6a1b9a",
  },
}));

export const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const CenterElement = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const StackWrapper = styled(Stack)(() => ({
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  flexWrap: "wrap",
}));


export const TodoElement = styled(Stack)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 25px",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "15px",
  boxShadow: "inset 2px 2px 5px 0px #999",
  height: "45px",
}));

export const IconButton = styled(Button)(() => ({
  margin: "0px",
  padding: "0px",
  border: "none",
  outline: "none",
  curser: "pointer",
}));