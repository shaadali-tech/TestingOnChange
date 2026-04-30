import Dust from "./Dust";
import { render, screen } from "@testing-library/react";

/*test("get by role", () => {
  render(<Dust />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});*/

test("get by test-id", () => {
  render(<Dust />);

  const button = screen.getByTestId("btn-test-id");
  expect(button).toBeInTheDocument();
});

test("get by Default Value", () => {
  render(<Dust />);

  const textarea = screen.getByDisplayValue("Shaad");
  expect(textarea).toBeInTheDocument();
});

test("Assertion Methods", () => {
  render(<Dust />);
  const btn = screen.getByRole("button");
  expect(btn).toBeEnabled();
});
