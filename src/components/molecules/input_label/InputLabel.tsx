import React, { FC, HTMLInputTypeAttribute } from "react";
import Flexbox from "@/components/atoms/flexbox/FlexBox";
import Input from "@/components/atoms/input/Input";
import Label from "@/components/atoms/label/Label";

interface InputLabelProps {
  id: string | undefined;
  value?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  pattern?: string;
  className: string | undefined;
  labelTag: string | React.ReactNode;
}

const InputLabel: FC<InputLabelProps> = (props) => {
  return (
    <Flexbox className={""}>
      <Label htmlFor={props.id} className={props.className}>
        {props.labelTag}
      </Label>
      <Input
        id={props.id}
        value={props.value}
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        required={props.required}
        onChange={props.onChange}
        pattern={props.pattern}
        className={""}
      />
    </Flexbox>
  );
};

export default InputLabel;
