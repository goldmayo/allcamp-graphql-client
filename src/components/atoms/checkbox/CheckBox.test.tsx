import { render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { useState } from "react";

describe("CheckBox", () => {
  it("renders a CheckBox", () => {
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

    const CheckBoxEl = screen.getByLabelText("A") as HTMLInputElement;
    expect(CheckBoxEl).toBeInTheDocument();
  });

  it("toggle checkbox when clicked", async () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <label htmlFor={"b"}>
          <CheckBox
            className={""}
            name={""}
            type={"checkbox"}
            value={"B"}
            id={"b"}
            required={true}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            B
          </CheckBox>
          B
        </label>
      );
    };
    render(<Wrap />);

    const CheckBoxEl = screen.getByLabelText("B") as HTMLInputElement;
    expect(CheckBoxEl.checked).toEqual(false);
    await userEvent.click(CheckBoxEl);
    expect(CheckBoxEl.checked).toEqual(true);
    await userEvent.click(CheckBoxEl);
    expect(CheckBoxEl.checked).toEqual(false);
  });

  it("get value from checkbox when clicked", async () => {
    const Wrap = () => {
      const [isChecked, setIsChecked] = useState(false);
      return (
        <label htmlFor={"c"}>
          <CheckBox
            className={""}
            name={""}
            type={"checkbox"}
            value={"C"}
            id={"c"}
            required={true}
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            C
          </CheckBox>
          C
        </label>
      );
    };
    render(<Wrap />);

    const CheckBoxEl = screen.getByLabelText("C") as HTMLInputElement;
    expect(CheckBoxEl.value).toBe("C");
  });
});
