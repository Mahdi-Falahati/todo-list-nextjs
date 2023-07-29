"use client";

import AddTodo from "./FormTodo";

export default function Todo() {
  const submitHandler = (todo) => {
    console.log(todo);
  };
  return <AddTodo onSubmit={submitHandler} />;
}
