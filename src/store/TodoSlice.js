import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrayData: [],
  completeTodo: [],
  unCompeleteTodo: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    AddTodo: (state, action) => {
      state.arrayData.push(action.payload);
      state.unCompeleteTodo.push(action.payload);
    },
    AddComplete: (state, action) => {
      state.arrayData = state.arrayData.map((item) => {
        if (item.id === action.payload) {
          return { ...item, complete: !item.complete };
        }
        return item;
      });

      state.unCompeleteTodo = state.arrayData.filter(
        (todo) => todo.complete !== true
      );

      state.completeTodo = state.arrayData.filter(
        (todo) => todo.complete === true
      );
    },
    DeleteTodo: (state, action) => {
      state.arrayData = state.arrayData.filter((todo) => todo.id !== action.payload);
      state.unCompeleteTodo = state.unCompeleteTodo.filter((todo) => todo.id !== action.payload);
      state.completeTodo = state.completeTodo.filter((todo) => todo.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { AddTodo, AddComplete, DeleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
