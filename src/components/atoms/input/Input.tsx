import React, { forwardRef, FC, HTMLInputTypeAttribute, RefObject } from "react";

interface InputProps {
  ref?: React.Ref<HTMLInputElement> | null;
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

const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
  ({ name, type, placeholder, id, className, required, onChange, pattern }, ref) => {
    return (
      <input
        ref={ref}
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
  }
);
Input.displayName = "Input";

export default Input;
