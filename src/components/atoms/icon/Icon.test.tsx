import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Icon from "./Icon";

describe("Icon component", () => {
  let mockOnClick: jest.Mock;
  let IconElement: HTMLImageElement;

  const setup = () => {
    render(
      <Icon
        path={"/defaultCamp.svg"}
        width={250}
        height={150}
        alt={`default camp image`}
        className=""
        onClick={mockOnClick}
      />
    );
    IconElement = screen.getByAltText("default camp image") as HTMLImageElement;
  };

  beforeEach(() => {
    mockOnClick = jest.fn((e) => e.preventDefault());
  });

  it("should render Icon correctly", () => {
    setup();
    expect(IconElement).toBeInTheDocument();
  });

  it("should call onSubmit when the Icon is submitted", async () => {
    setup();
    await userEvent.click(IconElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
