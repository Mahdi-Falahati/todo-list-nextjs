"use client";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

import { useDispatch, useSelector } from "react-redux";
import { AddComplete } from "@/store/TodoSlice";
import { useState } from "react";
import TodoComponent from "./TodoComponent";
import { StackWrapper } from "./customComponent";

export default function Output() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [value, setValue] = useState(0);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  const completeHandler = (id) => {
    dispatch(AddComplete(id));
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="todo tabs">
          <Tab label="Todos" {...a11yProps(0)} />
          <Tab label="Completed" {...a11yProps(1)} />
          <Tab label="UnCompleted" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <StackWrapper>
          {todos.arrayData?.map((todo, index) => {
            return (
              <TodoComponent
                key={index}
                todo={todo}
                onComplete={completeHandler}
              />
            );
          })}
        </StackWrapper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <StackWrapper>
          {todos.arrayData?.map((todo, index) => {
            return todo.complete == true ? (
              <TodoComponent
                key={index}
                todo={todo}
                onComplete={completeHandler}
              />
            ) : (
              "Complete todo is empty"
            );
          })}
        </StackWrapper>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <StackWrapper>
          {todos.arrayData?.map((todo, index) => {
            return todo.complete == false ? (
              <TodoComponent
                key={index}
                todo={todo}
                onComplete={completeHandler}
              />
            ) : (
              "UnComplete todo is empty"
            );
          })}
        </StackWrapper>
      </CustomTabPanel>
    </Box>
  );
}

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
