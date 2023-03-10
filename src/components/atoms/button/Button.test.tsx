import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  let mockOnClick: jest.Mock;
  let ButtonEl: HTMLButtonElement;

  const setup = () => {
    render(
      <Button type={"button"} size={"base"} className={""} disabled={false} onClick={mockOnClick}>
        click me
      </Button>
    );
    ButtonEl = screen.getByText(/click Me/i) as HTMLButtonElement;
  };

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("renders a Button", () => {
    setup();
    expect(ButtonEl).toBeInTheDocument();
  });

  it("simulates click event", async () => {
    setup();
    expect(ButtonEl).toBeInTheDocument();
    await userEvent.click(ButtonEl);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
