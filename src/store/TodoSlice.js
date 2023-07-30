import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state,action) => {

    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo } = todoSlice.actions;

export default todoSlice.reducer;
