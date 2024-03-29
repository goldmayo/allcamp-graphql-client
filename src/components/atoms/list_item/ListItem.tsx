import React, { FC } from "react";

interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  className: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const ListItem: FC<ListItemProps> = ({ className, children, onClick, ...props }) => {
  return (
    <li onClick={onClick} className={`list-none ${className}`}>
      {children}
    </li>
  );
};

export default ListItem;
