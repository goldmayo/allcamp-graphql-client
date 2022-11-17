import { FC } from "react";
import Span from "@/components/atoms/span/Span";
import ListItem from "@/components/atoms/list_item/ListItem";

interface SpanListItemProps {
  displayName: string;
  displayValue: string[];
}

const SpanListItem: FC<SpanListItemProps> = (props) => {
  return (
    <ListItem className={"mb-8"}>
      <Span className="px-2 mb-2">{`${props.displayName} :`}</Span>
      <Span>{props.displayValue.length !== 0 ? `${props.displayValue.join(",")}` : "-"}</Span>
    </ListItem>
  );
};

export default SpanListItem;
