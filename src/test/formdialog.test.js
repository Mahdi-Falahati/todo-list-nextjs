import { render, screen } from "@testing-library/react";
import { AddTodoButton } from "../components/customComponent";
import '@testing-library/jest-dom'

test("renders Add Todo button", () => {
  render(
    <AddTodoButton
      autoFocus
      color="inherit"
      type="submit"
      variant="contained"
    >
      Add Todo
    </AddTodoButton>
  );

  const addButton = screen.getByRole("button", { name: /add todo/i });
  expect(addButton).toBeInTheDocument();
});
