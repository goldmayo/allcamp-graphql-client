import React, { FC, HTMLInputTypeAttribute } from "react";
import Flexbox from "../../atoms/flexbox/FlexBox";
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

interface InputFieldProps {
  id: string | undefined;
  value?: string;
  name: string;
  type: HTMLInputTypeAttribute;
  placeholder: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
  pattern?: string;
  className: string | undefined;
}

const InputField: FC<InputFieldProps> = (props) => {
  return (
    <Flexbox className={"flex-col border border-slate-500 w-3/12"}>
      <Label htmlFor={props.id} className={props.className}>
        {props.name}
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
        className={`${props.className} `}
      />
    </Flexbox>
  );
};

export default InputField;
