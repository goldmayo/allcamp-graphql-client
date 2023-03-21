import { RenderHookResult, render, screen } from "@testing-library/react";
import Modal from "./Modal";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { renderHook } from "@testing-library/react";
import { createRef, RefObject } from "react";

describe("Modal", () => {
  let ModalElement: HTMLDialogElement;
  let CloseButtonElement: HTMLButtonElement;
  let OpenButtonElement: HTMLButtonElement;
  let mockOnClick: jest.Mock;
  let mockRef: RefObject<HTMLDialogElement>;

  const setup = () => {
    const Wrap = () => {
      return (
        <>
          <button onClick={mockOnClick}>open</button>
          <Modal className={""} title={"test"} ref={mockRef}>
            <h4>testing Modal</h4>
          </Modal>
        </>
      );
    };
    render(<Wrap />);
    OpenButtonElement = screen.getByText("open") as HTMLButtonElement;
  };

  beforeEach(() => {
    HTMLDialogElement.prototype.show = jest.fn(function mock(this: HTMLDialogElement) {
      this.open = true;
    });

    HTMLDialogElement.prototype.showModal = jest.fn(function mock(this: HTMLDialogElement) {
      this.open = true;
    });

    HTMLDialogElement.prototype.close = jest.fn(function mock(this: HTMLDialogElement) {
      this.open = false;
    });

    mockRef = createRef<HTMLDialogElement>();
    mockOnClick = jest.fn((e) => {
      e.preventDefault();
      mockRef.current?.showModal();
    });
  });

  it("should render OpenButtonElement", () => {
    setup();
    expect(OpenButtonElement).toBeInTheDocument();
  });

  it("should open ModalElement when click open button", async () => {
    setup();
    await userEvent.click(OpenButtonElement);
    ModalElement = screen.getByRole("dialog") as HTMLDialogElement;
    expect(ModalElement).toBeInTheDocument();
    expect(ModalElement.children.length).toBe(2);
  });

  it("should close ModalElement when click close button", async () => {
    setup();
    await userEvent.click(OpenButtonElement);
    ModalElement = screen.getByRole("dialog") as HTMLDialogElement;
    CloseButtonElement = screen.getByLabelText(/close/i) as HTMLButtonElement;
    CloseButtonElement.onclick = jest.fn(function mock() {
      mockRef?.current?.close();
    });
    await userEvent.click(CloseButtonElement);
    expect(CloseButtonElement.onclick).toHaveBeenCalledTimes(1);
    expect(ModalElement.open).toEqual(false);
  });
});
