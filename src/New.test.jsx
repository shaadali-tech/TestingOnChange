import { test } from "vitest";
import New from "./New";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("User Event", async () => {
  userEvent.setup();
  render(<New />);
  const btn = screen.getByText("Click Me");
  await userEvent.click(btn);
  expect(screen.getByText("Hello, World!")).toBeInTheDocument();
});
