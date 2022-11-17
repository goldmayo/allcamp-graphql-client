import React, { FC } from "react";
import CheckBox from "@/components/atoms/checkbox/CheckBox";
import Label from "@/components/atoms/label/Label";

interface CheckBoxLabelProps {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required?: boolean;
  checked?: boolean;
}

const CheckBoxLabel: FC<CheckBoxLabelProps> = ({
  name,
  onChange,
  id,
  className,
  value,
  required = false,
  checked = false,
}) => {
  return (
    <>
      <CheckBox
        className={`${className} cursor-pointer`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        checked={checked}
      />
      <Label htmlFor={id} className="pl-0.5 pr-4 cursor-pointer">
        {value}
      </Label>
    </>
  );
};

export default CheckBoxLabel;
