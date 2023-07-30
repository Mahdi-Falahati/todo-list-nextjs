import styled from "@emotion/styled";
import { purple } from "@mui/material/colors";
import { Box, Button } from "@mui/material";

export const BoxWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const AddTodoButton = styled(Button)(({ theme }) => ({
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

export const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
