import React, { FC } from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset";
  size: "sm" | "md" | "lg" | "xl";
  textColor: string;
  bgColor: string;
  content: string;
  classname?: string[];
  onClick: () => void;
}

// utils로 getSize(type, size)
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

const Button: FC<ButtonProps> = ({ type = "button", size, textColor, bgColor, classname, content, onClick }) => {
  console.log(`bg-${bgColor} text-${textColor} ${getSize(size).join(" ")} ${classname ? classname.join(" ") : ""}`);

  return (
    <button
      type={type}
      className={`bg-${bgColor} text-${textColor} ${getSize(size).join(" ")} ${classname ? classname.join(" ") : ""}`}
      onClick={onClick}
    >
      {content}
    </button>
  );
};

export default Button;
