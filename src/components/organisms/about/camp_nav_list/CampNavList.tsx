import { forwardRef, MutableRefObject } from "react";
import ListItem from "@/components/atoms/list_item/ListItem";

interface CampNavListProps {
  children: React.ReactNode;
  listStyle: string;
}
type Ref = HTMLElement | null;

const CampNavList = forwardRef<Ref, CampNavListProps>((props, ref) => {
  const handleClick = (targetRef: MutableRefObject<Ref>) => {
    if (targetRef === null) return;
    window.scrollTo({
      top: targetRef.current?.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <ListItem className="" onClick={() => handleClick(ref as MutableRefObject<Ref>)}>
      {props.children}
    </ListItem>
  );
});

CampNavList.displayName = "CampNavList";

export default CampNavList;
