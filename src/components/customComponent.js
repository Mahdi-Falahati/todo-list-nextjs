import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
import { Box, Button, Slide } from "@mui/material";
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
