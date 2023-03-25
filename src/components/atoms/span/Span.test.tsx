import { render, screen } from "@testing-library/react";
import Span from "./Span";
import "@testing-library/jest-dom";

describe("Span", () => {
  let SpanElement: HTMLElement;

  const setup = () => {
    const Wrap = () => {
      return <Span className={""}>testing span</Span>;
    };
    render(<Wrap />);
    SpanElement = screen.getByText("testing span") as HTMLElement;
  };

  it("should render SpanElement", () => {
    setup();
    expect(SpanElement).toBeInTheDocument();
  });
});
