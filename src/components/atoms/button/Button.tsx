import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  className?: string | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const getSpaceSize = (size: string) => {
  switch (size) {
    case "xs":
      return "py-2 px-2 text-body2 text-center";
    case "sm":
      return "py-2 px-4 text-body1 text-center";
    case "md":
      return "py-2.5 px-8 text-headline3 text-center ";
    case "lg":
      return "py-2.5 px-10 text-headline3 text-center";
    case "xl":
      return "py-2.5 px-12 text-headline2 text-center";
    default:
      return "py-2 px-4 text-body1 text-center";
  }
};
// mx-1 rounded-md text-body1 bg-secondary-lightblue text-mono-white
const Button: FC<ButtonProps> = ({ type = "button", children, onClick, disabled, className, size = "sm" }) => {
  return (
    <button type={type} className={`${getSpaceSize(size)} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
