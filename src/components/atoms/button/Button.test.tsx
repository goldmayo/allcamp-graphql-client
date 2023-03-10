import { render, screen } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  let mockOnClick: jest.Mock;
  let ButtonElement: HTMLButtonElement;

  const setup = () => {
    render(
      <Button type={"button"} size={"base"} className={""} disabled={false} onClick={mockOnClick}>
        click me
      </Button>
    );
    ButtonElement = screen.getByText(/click Me/i) as HTMLButtonElement;
  };

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("renders a Button", () => {
    setup();
    expect(ButtonElement).toBeInTheDocument();
  });

  it("simulates click event", async () => {
    setup();
    expect(ButtonElement).toBeInTheDocument();
    await userEvent.click(ButtonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
