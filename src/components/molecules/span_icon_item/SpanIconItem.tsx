import React, { FC } from "react";
import ListItem from "@/components/atoms/list_item/ListItem";
import Span from "@/components/atoms/span/Span";

interface SpanIconItemProps {
  children: React.ReactNode;
  iconName: string;
  gapSize: string;
  textStyle?: string;
}

const SpanIconItem: FC<SpanIconItemProps> = ({ children, iconName, gapSize, textStyle = "text-body4" }) => {
  return (
    <ListItem className={`text-mono-black flex flex-col justify-center items-center ${gapSize}`}>
      {children}
      <Span className={`${textStyle}`}>{iconName}</Span>
    </ListItem>
  );
};

export default SpanIconItem;
