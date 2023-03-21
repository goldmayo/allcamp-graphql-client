import React, { FC } from "react";

interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  htmlFor: string | undefined;
  className: string | undefined;
  children: React.ReactNode;
}

const Label: FC<LabelProps> = ({ htmlFor, children, className, ...props }) => {
  return (
    <label htmlFor={htmlFor} className={`${className} justify-center items-center flex`}>
      {children}
    </label>
  );
};

export default Label;
