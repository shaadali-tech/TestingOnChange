import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

beforeEach(() => {
  console.log("Before Each Test");
});

test("should 1st Test", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Hello World" } });
  expect(input.value).toBe("Hello World");
});

test("should 2nd Test", () => {
  render(<App />);
  const button = screen.getByRole("button");
  fireEvent.click(button);
  expect(screen.getByText("Updated Value")).toBeInTheDocument();
});

test("SnapShot Testing", () => {
  const { container } = render(<App />);
  expect(container).toMatchSnapshot();
});
