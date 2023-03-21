import { render, screen } from "@testing-library/react";
import ListItem from "./ListItem";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("ListItem", () => {
  let ListItemElements: HTMLLIElement[];
  let UListElement: HTMLUListElement;
  let mockOnClick: jest.Mock;

  const setup = () => {
    const Wrap = () => {
      return (
        <ul role="group">
          <ListItem className={""} onClick={mockOnClick}>
            ListItem1
          </ListItem>
          <ListItem className={""} onClick={mockOnClick}>
            ListItem2
          </ListItem>
          <ListItem className={""} onClick={mockOnClick}>
            ListItem3
          </ListItem>
        </ul>
      );
    };
    render(<Wrap />);
    UListElement = screen.getByRole("group") as HTMLUListElement;
    ListItemElements = screen.queryAllByRole("listitem") as HTMLLIElement[];
  };

  beforeEach(() => {
    mockOnClick = jest.fn();
  });

  it("should render UListElement & ListItemElements", () => {
    setup();
    expect(UListElement).toBeInTheDocument();
    // to check that the ListItemElements array contains at least one elemen
    expect(ListItemElements).toEqual(expect.arrayContaining(ListItemElements));
  });

  it("should render list of 3 childs", async () => {
    setup();
    expect(UListElement.children.length).toBe(3);
    expect(ListItemElements.length).toBe(3);
  });

  it("called 1 times onClick function", async () => {
    setup();
    const firstListItemElements = screen.getByText(/ListItem1/i) as HTMLLIElement;
    expect(firstListItemElements).toBeInTheDocument();
    await userEvent.click(firstListItemElements);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});
