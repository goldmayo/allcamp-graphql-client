import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";
import "@testing-library/jest-dom";

describe("Anchor", () => {
  let anchorElement: HTMLAnchorElement;
  const setup = () => {
    render(
      <Anchor href={"https://www.naver.com/"} className={""}>
        Click Me
      </Anchor>
    );

    anchorElement = screen.getByText(/click Me/i) as HTMLAnchorElement;
  };

  it("renders a Anchor", () => {
    setup();
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement.closest("a")).toHaveAttribute("href", "https://www.naver.com/");
  });
});
