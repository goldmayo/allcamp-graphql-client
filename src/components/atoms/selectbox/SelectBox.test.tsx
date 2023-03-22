import { RenderHookResult, render, screen } from "@testing-library/react";
import SelectBox from "./SelectBox";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react";
import { createRef, RefObject } from "react";
import { SelectBoxOptionsData } from "@/types/selectBoxData";

describe("SelectBox", () => {
  let selectBoxElement: HTMLSelectElement;
  let defaultOptionElement: HTMLOptionElement;
  let selectedOptionElement: HTMLOptionElement;
  let mockOnClick: jest.Mock;
  let mockRef: RefObject<HTMLSelectElement>;
  const mockOptionsData: SelectBoxOptionsData[] = [
    { id: "doName1", value: "Seoul" },
    { id: "doName2", value: "Busan" },
    { id: "doName3", value: "Daegu" },
    { id: "doName4", value: "Incheon" },
    { id: "doName5", value: "Gwangju" },
    { id: "doName6", value: "Daejeon" },
    { id: "doName7", value: "Ulsan" },
    { id: "doName8", value: "Sejong" },
    { id: "doName9", value: "Gyeonggi" },
    { id: "doName10", value: "Gangwon" },
    { id: "doName11", value: "Chungcheongbuk" },
    { id: "doName12", value: "Chungcheongnam" },
    { id: "doName13", value: "Jeollabuk" },
    { id: "doName14", value: "Jeollanam" },
    { id: "doName15", value: "Gyeongsangbuk" },
    { id: "doName16", value: "Gyeongsangnam" },
    { id: "doName17", value: "Jeju" },
  ];
  const setup = () => {
    const Wrap = () => {
      return (
        <SelectBox
          className={""}
          ref={mockRef}
          id={"testselectbox"}
          options={mockOptionsData}
          name={"doname"}
          placeholder={"select area"}
        />
      );
    };
    render(<Wrap />);
    selectBoxElement = screen.getByRole("combobox") as HTMLSelectElement;
  };

  beforeEach(() => {
    mockRef = createRef<HTMLSelectElement>();
    mockOnClick = jest.fn();
  });

  it("should render SelectBoxElement", () => {
    setup();
    expect(selectBoxElement).toBeInTheDocument();
  });

  it("default option should be falsy when different option is selected", async () => {
    setup();
    await userEvent.selectOptions(selectBoxElement, "Seoul");
    defaultOptionElement = screen.getByRole("option", { name: "select area" }) as HTMLOptionElement;
    selectedOptionElement = screen.getByRole("option", { name: "Seoul" }) as HTMLOptionElement;
    expect(defaultOptionElement.selected).toBeFalsy();
    expect(selectedOptionElement.selected).toBeTruthy();
  });
});
