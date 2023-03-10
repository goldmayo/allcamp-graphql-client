import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("CheckBox", () => {
  let CheckBoxElement: HTMLInputElement;

  const setup = () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <label htmlFor={"a"}>
          <CheckBox
            className={""}
            name={""}
            type={"checkbox"}
            value={"A"}
            id={"a"}
            required={true}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            A
          </CheckBox>
          A
        </label>
      );
    };
    render(<Wrap />);

    CheckBoxElement = screen.getByLabelText("A") as HTMLInputElement;
  };

  // beforeEach(() => {});

  it("renders a CheckBox", () => {
    setup();
    expect(CheckBoxElement).toBeInTheDocument();
  });

  it("toggle checkbox when clicked", async () => {
    setup();

    expect(CheckBoxElement.checked).toEqual(false);
    await userEvent.click(CheckBoxElement);
    expect(CheckBoxElement.checked).toEqual(true);
  });

  it("get value from checkbox", async () => {
    setup();
    expect(CheckBoxElement.value).toBe("A");
  });
});
