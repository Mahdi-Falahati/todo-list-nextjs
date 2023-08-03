import { render, screen, fireEvent } from "@testing-library/react";
import { AddTodoButton } from "../components/customComponent";
import "@testing-library/jest-dom";
import { TextField } from "@mui/material";

describe("<TextField />", () => {
  test("renders the label correctly", () => {
    render(<TextField label="Description" />);
    expect(screen.getByLabelText("Description")).toBeInTheDocument();
  });
});

describe("<AddTodoButton/>", () => {
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

  test("should call the onClick handler when clicked", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <AddTodoButton onClick={onClickMock}>Add Todo</AddTodoButton>
    );

    const addButton = getByText("Add Todo");
    fireEvent.click(addButton);

    expect(onClickMock).toHaveBeenCalled();
  });
});
