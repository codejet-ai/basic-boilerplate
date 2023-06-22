import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";

import { Button } from "components/Button";

test("render Button with given characters", () => {
  const mockText = "Click Me";
  render(<Button characters={mockText} className="testClassName" />);
  expect(screen.getByRole("button")).toHaveTextContent(mockText);
});

test("calls onClick prop when clicked", async () => {
  const user = userEvent.setup();
  const handleClick = jest.fn();
  const mockText = "Click Me";

  render(<Button onClick={handleClick} characters={mockText} />);
  await user.click(screen.getByText(mockText));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
