import React, { FC, HTMLInputTypeAttribute } from "react";

interface InputProps {
  value?: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  id: string | undefined;
  className: string | undefined;
  required: boolean;
  pattern?: string;
}

const Input: FC<InputProps> = ({ value, name, type, placeholder, id, className, required, onChange, pattern }) => {
  return (
    <input
      value={value}
      name={name}
      type={type}
      placeholder={placeholder}
      id={id}
      className={`${className}`}
      required={required}
      onChange={onChange}
      autoComplete="off"
      pattern={pattern}
    />
  );
};

export default Input;
