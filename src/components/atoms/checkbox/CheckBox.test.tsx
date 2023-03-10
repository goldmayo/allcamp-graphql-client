import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("CheckBox", () => {
  let CheckBoxEl: HTMLInputElement;

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

    CheckBoxEl = screen.getByLabelText("A") as HTMLInputElement;
  };

  // beforeEach(() => {});

  it("renders a CheckBox", () => {
    setup();
    expect(CheckBoxEl).toBeInTheDocument();
  });

  it("toggle checkbox when clicked", async () => {
    setup();

    expect(CheckBoxEl.checked).toEqual(false);
    await userEvent.click(CheckBoxEl);
    expect(CheckBoxEl.checked).toEqual(true);
  });

  it("get value from checkbox", async () => {
    setup();
    expect(CheckBoxEl.value).toBe("A");
  });
});
