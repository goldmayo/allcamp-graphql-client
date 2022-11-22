import React, { FC } from "react";

interface CheckBoxProps {
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required?: boolean;
  checked?: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ name, onChange, id, value, className, required = false, checked = false }) => {
  return (
    <input
      className={className}
      name={name}
      type={"checkbox"}
      value={value}
      onChange={onChange}
      id={id}
      required={required}
      checked={checked}
    />
  );
};

export default CheckBox;
