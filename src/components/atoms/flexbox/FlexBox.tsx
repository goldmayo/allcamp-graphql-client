import React, { FC } from "react";

interface FlexBoxProps {
  children: React.ReactNode;
  className: string;
}

const FlexBox: FC<FlexBoxProps> = ({ children, className }) => {
  return <div className={`flex ${className}`}>{children}</div>;
};

export default FlexBox;
