import React, { FC } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "button" | "submit" | "reset";
  size?: "xs" | "sm" | "base" | "md" | "lg" | "xl" | "custom";
  className?: string | undefined;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

const getSpaceSize = (size: string) => {
  switch (size) {
    case "custom":
      return "text-center";
    case "xs":
      return "py-2 px-2 text-body2 text-center";
    case "sm":
      return "py-2 px-4 text-body1 text-center";
    case "base":
      return "py-2 px-4 text-body1 text-center";
    case "md":
      return "py-2.5 px-8 text-headline3 text-center ";
    case "lg":
      return "py-2.5 px-10 text-headline3 text-center";
    case "xl":
      return "py-2.5 px-12 text-headline2 text-center";
    default:
      return "py-2 px-6 text-title3 text-center";
  }
};
const Button: FC<ButtonProps> = ({
  type = "button",
  children,
  onClick,
  disabled,
  className,
  size = "sm",
  ...props
}) => {
  return (
    <button type={type} className={`${getSpaceSize(size)} ${className}`} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
