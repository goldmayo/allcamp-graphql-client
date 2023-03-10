import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";
import "@testing-library/jest-dom";

describe("Anchor", () => {
  let anchorEl:HTMLAnchorElement
  const setup = () =>{
    render(
      <Anchor href={"https://www.naver.com/"} className={""}>
        Click Me
      </Anchor>
    );

    anchorEl = screen.getByText(/click Me/i) as HTMLAnchorElement;
  }
  
  it("renders a Anchor", () => {
    setup()
    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl.closest("a")).toHaveAttribute("href", "https://www.naver.com/");
  });
});
