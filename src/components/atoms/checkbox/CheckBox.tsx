import React, { FC } from "react";

interface CheckBoxProps {
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ checked, name, onChange, id, className, required }) => {
  return (
    <input
      className={className}
      checked={checked}
      name={name}
      type={"checkbox"}
      onChange={onChange}
      id={id}
      required={required}
    />
  );
};

export default CheckBox;
