import { render, screen } from "@testing-library/react";
import Anchor from "./Anchor";
import "@testing-library/jest-dom";

describe("Anchor", () => {
  it("renders a Anchor", () => {
    render(
      <Anchor href={"https://www.naver.com/"} className={""}>
        Click Me
      </Anchor>
    );

    const anchorEl = screen.getByText(/click Me/i);

    expect(anchorEl).toBeInTheDocument();
    expect(anchorEl.closest("a")).toHaveAttribute("href", "https://www.naver.com/");
  });
});
