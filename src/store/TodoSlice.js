import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  todos: [{ id: 0, todo: "First todo for test" }],
};

export const todoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counter: (state) => {
      state.value += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { counter } = todoSlice.actions;

export default todoSlice.reducer;
