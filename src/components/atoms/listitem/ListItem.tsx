import React, { FC } from "react";

interface ListItemProps {
  className: string;
  children: React.ReactNode;
}

const ListItem: FC<ListItemProps> = ({ className, children }) => {
  return <li className={className}>{children}</li>;
};

export default ListItem;
