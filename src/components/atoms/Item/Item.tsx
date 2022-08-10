import React, { FC } from "react";

interface ItemProps {
  className: string;
  children: React.ReactElement;
}

const Item: FC<ItemProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

export default Item;
