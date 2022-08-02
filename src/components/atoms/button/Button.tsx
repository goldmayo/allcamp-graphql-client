import React, { FC } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg" | "xl";
  style: string;
  textColor: string;
  bgColor: string;
  content: React.ReactElement | string;
  classname?: string[];
  disabled?: boolean;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

// utils로 getSize(type, size)
// size + w h 속성 추가
const getSize = (size: string) => {
  switch (size) {
    case "sm":
      return ["py-2", "px-4", "text-sm"];
    case "md":
      return ["py-2", "px-4", "text-base"];
    case "lg":
      return ["py-2", "px-4", "text-lg"];
    case "xl":
      return ["py-2", "px-4", "text-xl"];
    default:
      return ["py-2", "px-4", "text-sm"];
  }
};

const Button: FC<ButtonProps> = ({
  type = "button",
  size = "md",
  style,
  textColor,
  bgColor,
  disabled,
  classname,
  content,
  onClick,
}) => {
  return (
    <button
      type={type}
      className={`${style} ${bgColor} ${textColor} ${getSize(size).join(" ")} ${classname ? classname.join(" ") : ""} `}
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
