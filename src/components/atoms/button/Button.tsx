import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  content: React.ReactElement | string;
  className?: string | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const getSpaceSize = (size: string) => {
  switch (size) {
    case "xs":
      return "py-2 px-3 text-xs text-center";
    case "sm":
      return "py-2 px-3 text-sm text-center";
    case "md":
      return "py-2 px-4 text-base text-center";
    case "lg":
      return "py-2.5 px-5 text-lg text-center";
    case "xl":
      return "py-2.5 px-5 text-xl text-center";
    default:
      return "py-2 px-4 text-base text-center";
  }
};

const Button: FC<ButtonProps> = ({ type = "button", content, onClick, disabled, className, size = "md" }) => {
  return (
    <button type={type} className={`${getSpaceSize(size)} ${className}`} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
};

export default Button;
