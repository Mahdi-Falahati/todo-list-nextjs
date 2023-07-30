"use client";

import AddTodo from "./FormTodo";
import Output from "./Output";

export default function Todos() {
  const submitHandler = (todo) => {
    console.log(todo);
  };
  return (
    <>
      <AddTodo onSubmit={submitHandler} />
      <Output />
    </>
  );
}
