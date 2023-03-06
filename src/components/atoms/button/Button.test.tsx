import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("renders a Button", () => {
    const mockOnClick = jest.fn();
    render(
      <Button type={"button"} size={"base"} className={""} disabled={false} onClick={mockOnClick}>
        click me
      </Button>
    );

    const ButtonEl = screen.getByText(/click Me/i);
    expect(ButtonEl).toBeInTheDocument();
  });

  it("simulates click event", async () => {
    const mockOnClick = jest.fn();
    render(
      <Button type={"button"} size={"base"} className={""} disabled={false} onClick={mockOnClick}>
        click me
      </Button>
    );

    const ButtonEl = screen.getByText(/click Me/i);
    expect(ButtonEl).toBeInTheDocument();
    await userEvent.click(ButtonEl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
