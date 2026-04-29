import Dust from "./Dust";
import { render, screen } from "@testing-library/react";

test("get by role", () => {
  render(<Dust />);

  const input = screen.getByRole("textbox");
  expect(input).toBeInTheDocument();
});
