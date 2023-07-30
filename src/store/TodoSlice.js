import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.push(action.payload);
    },
    AddComplete: (state, action) => {
      state = state.map((item) => {
        if (item.id == action.payload) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, AddComplete } = todoSlice.actions;

export default todoSlice.reducer;
