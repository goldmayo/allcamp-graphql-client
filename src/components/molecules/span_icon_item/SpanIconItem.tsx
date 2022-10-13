import React, { FC } from "react";
import ListItem from "../../atoms/list_item/ListItem";
import Span from "../../atoms/span/Span";

interface SpanIconItemProps {
  children: React.ReactNode;
  iconName: string;
  gapSize: string;
}

const SpanIconItem: FC<SpanIconItemProps> = ({ children, iconName, gapSize }) => {
  return (
    <ListItem className={`text-mono-black flex flex-col justify-center items-center ${gapSize}`}>
      {children}
      <Span className={"text-body4"}>{iconName}</Span>
    </ListItem>
  );
};

export default SpanIconItem;
