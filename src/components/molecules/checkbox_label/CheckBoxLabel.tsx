import React, { FC } from "react";
import CheckBox from "../../atoms/checkbox/CheckBox";
import Label from "../../atoms/label/Label";

interface CheckBoxLabelProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required?: boolean;
}

const CheckBoxLabel: FC<CheckBoxLabelProps> = ({ name, onChange, id, className, required = false }) => {
  return (
    <>
      <CheckBox className={className} id={id} name={name} onChange={onChange} required={required} />
      <Label htmlFor={id} className="pl-0.5 pr-4">
        {name}
      </Label>
    </>
  );
};

export default CheckBoxLabel;
