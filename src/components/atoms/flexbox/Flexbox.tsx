import React, { FC } from "react";

interface FlexboxProps {
  children: React.ReactElement;
  className: string;
}

const Flexbox: FC<FlexboxProps> = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default Flexbox;
