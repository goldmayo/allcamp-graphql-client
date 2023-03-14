import { render, screen } from "@testing-library/react";
import Label from "./Label";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Label", () => {
  let LabeledElement: HTMLInputElement;

  const setup = () => {
    const Wrap = () => {
      return (
        <>
          <input id="name" placeholder="Name" className="" />
          <Label htmlFor="name" className={""}>
            Name
          </Label>
        </>
      );
    };
    render(<Wrap />);

    LabeledElement = screen.getByLabelText("Name") as HTMLInputElement;
  };

  it("renders a label", () => {
    setup();
    expect(LabeledElement).toHaveAttribute("id", "name");
    expect(LabeledElement).toBeInTheDocument();
  });

  it("get value from labeled element", async () => {
    setup();
    await userEvent.type(LabeledElement, "Scott");
    expect(LabeledElement.value).toBe("Scott");
  });
});
