"use client";
import { Box, ButtonGroup } from "@mui/material";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PreviewIcon from "@mui/icons-material/Preview";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import { IconBtn, TodoElement } from "./customComponent";
import { useDispatch } from "react-redux";
import { AddComplete } from "@/store/TodoSlice";

export default function TodoComponent(todo) {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState(todo.todo);
  const dispatch = useDispatch();
  const { title, description, id, duration, complete } = data;

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const completeTodoHandle = () => {
    dispatch(AddComplete(id));
    setData({ ...data, complete:true });
  };

  return (
    <TodoElement
      sx={{
        marginBottom: "10px",
        width: { xs: "200px", sm: "350px", md: "400px" },
      }}
    >
      <Typography
        variant="button"
        sx={{ textDecoration: !complete ? "none" : "line-through" }}
      >
        {title}
      </Typography>

      <Box>
        <ButtonGroup
          color="secondary"
          aria-label="icon button"
          orientation="horizontal"
          variant="text"
        >
          <IconBtn onClick={handleOpen}>
            <PreviewIcon sx={{ fontSize: "30px", color: "red" }} />
          </IconBtn>
          <IconBtn onClick={completeTodoHandle}>
            <AssignmentTurnedInIcon sx={{ fontSize: "29px", color: "green" }} />
          </IconBtn>
        </ButtonGroup>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography
              id="modal-modal-title"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                borderBottom: "1px solid #000",
              }}
              variant="h6"
              component="h2"
            >
              {title}
              <Typography variant="caption">Duration : {duration}</Typography>
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Summary : {description}
            </Typography>
          </Box>
        </Modal>
      </Box>
    </TodoElement>
  );
}

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
