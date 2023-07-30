"use client";
import styled from "@emotion/styled";
import { Box, Button, Stack } from "@mui/material";

import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PreviewIcon from "@mui/icons-material/Preview";

export default function TodoComponent() {
  return (
    <TodoElement sx={{ width: { xs: "200px", sm: "350px", md: "400px" } }}>
      <p>helo</p>
      <Box>
        <IconButton>
          <AssignmentTurnedInIcon />
        </IconButton>
        <IconButton>
          <PreviewIcon />
        </IconButton>
      </Box>
    </TodoElement>
  );
}

const TodoElement = styled(Stack)(() => ({
  display: "flex",
  justifyContent: "space-between",
  padding: "0px 25px",
  flexDirection: "row",
  alignItems: "center",
  borderRadius: "15px",
  boxShadow: "inset 2px 2px 5px 0px #999",
  height: "45px",
}));

const IconButton = styled(Button)(() => ({
  margin: "0px",
  padding: "0px",
  border: "none",
  outline: "none",
  curser: "pointer",
}));
