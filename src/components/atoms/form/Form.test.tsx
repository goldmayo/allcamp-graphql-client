import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

describe("Form component", () => {
  let onSubmit: jest.Mock;
  let formElement: HTMLFormElement;

  const setup = () => {
    render(
      <Form method="post" className="" onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="Username" />
        <button type="submit">Submit</button>
      </Form>
    );
    formElement = screen.getByRole("form") as HTMLFormElement;
  };

  beforeEach(() => {
    onSubmit = jest.fn((e) => e.preventDefault());
  });

  it("should render correctly", () => {
    setup();
    expect(formElement).toBeInTheDocument();
    expect(formElement).toHaveAttribute("method", "post");
    expect(formElement.children.length).toBe(2);
  });

  it("should call onSubmit when the form is submitted", async () => {
    setup();
    const submitButton = screen.getByText(/Submit/i);
    await userEvent.click(submitButton);
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
