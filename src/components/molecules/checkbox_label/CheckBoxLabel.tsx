import React, { FC } from "react";
import CheckBox from "../../atoms/checkbox/CheckBox";
import Label from "../../atoms/label/Label";

interface CheckBoxLabelProps {
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required?: boolean;
}

const CheckBoxLabel: FC<CheckBoxLabelProps> = ({ checked, name, onChange, id, className, required = false }) => {
  return (
    <>
      <CheckBox className={className} id={id} checked={checked} name={name} onChange={onChange} required={required} />
      <Label htmlFor={id} className="">
        {name}
      </Label>
    </>
  );
};

export default CheckBoxLabel;
