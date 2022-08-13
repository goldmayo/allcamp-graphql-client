import React, { FC } from "react";
import CheckBox from "../../atoms/checkbox/CheckBox";
import Label from "../../atoms/label/Label";

interface CheckBoxLabelProps {
  checked: boolean;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required: boolean;
}

const CheckBoxLabel: FC<CheckBoxLabelProps> = (props) => {
  return (
    <>
      <CheckBox
        className={props.className}
        id={props.id}
        checked={props.checked}
        name={props.name}
        onChange={props.onChange}
        required={props.required}
      />
      <Label htmlFor={props.id} className="">
        {props.name}
      </Label>
    </>
  );
};

export default CheckBoxLabel;
