import Dust from "./Dust";
import { render, screen } from "@testing-library/react";

test("get by role", () => {
  render(<Dust />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});

test("get by test-id", () => {
  render(<Dust />);

  const button = screen.getByTestId("btn-test-id");
  expect(button).toBeInTheDocument();
});
