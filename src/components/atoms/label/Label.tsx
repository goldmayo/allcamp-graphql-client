import React, { FC } from "react";

interface LabelProps {
  htmlFor: string | undefined;
  className: string | undefined;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ htmlFor, children, className }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {children}
    </label>
  );
};

export default Label;
