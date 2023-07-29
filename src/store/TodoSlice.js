import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  todo: [{ title: "this is a example todo", id: 0 }],
};

export const TodoSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    counter: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
