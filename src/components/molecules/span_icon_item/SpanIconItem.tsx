import React, { FC } from "react";
import ListItem from "../../atoms/list_item/ListItem";
import Span from "../../atoms/span/Span";

interface SpanIconItemProps {
  children: React.ReactNode;
  iconName: string;
}

const SpanIconItem: FC<SpanIconItemProps> = ({ children, iconName }) => {
  return (
    <ListItem className={"text-black border flex flex-col w-1/12 justify-center items-center p-0 m-0"}>
      {children}
      <Span className={"text-xs"}>{iconName}</Span>
    </ListItem>
  );
};

export default SpanIconItem;
