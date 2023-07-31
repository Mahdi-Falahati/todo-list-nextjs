import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayData: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.arrayData.push(action.payload);
    },
    AddComplete: (state, action) => {
      state.arrayData = state.arrayData.map((item) => {
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
