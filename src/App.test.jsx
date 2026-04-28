import App from "./App";
import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

test("should 1st Test", () => {
  render(<App />);
  const input = screen.getByRole("textbox");
  fireEvent.change(input, { target: { value: "Hello World" } });
  expect(input.value).toBe("Hello World");
});
