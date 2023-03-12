import { render, screen } from "@testing-library/react";
import Input from "./Input";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { HTMLInputTypeAttribute, useState } from "react";

describe("Input", () => {
  let InputElement: HTMLInputElement;
  let mockOnChange: jest.Mock;

  const setup = (type: HTMLInputTypeAttribute, ref?: React.Ref<HTMLInputElement> | null) => {
    const Wrap = () => {
      return (
        <>
          <label htmlFor="inputtest">testing</label>
          <Input
            ref={ref}
            name={"test"}
            type={type}
            placeholder={"input test"}
            id={"inputtest"}
            className={""}
            required={false}
            onChange={mockOnChange}
            autoComplete="off"
            pattern={""}
          />
        </>
      );
    };
    render(<Wrap />);

    InputElement = screen.getByLabelText("testing") as HTMLInputElement;
  };

  beforeEach(() => {
    mockOnChange = jest.fn((e) => {
      e.preventDefault();
    });
  });

  it("renders a Input", () => {
    setup("text");
    expect(InputElement).toBeInTheDocument();
  });

  it("get value from Input", async () => {
    setup("text");
    await userEvent.type(InputElement, "A");
    expect(InputElement.value).toBe("A");
  });
});
