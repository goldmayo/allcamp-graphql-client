import React, { FC } from "react";
import { SelectBoxOptionsData } from "../../../types/selectBoxData";
import Flexbox from "../../atoms/flexbox/FlexBox";
import Label from "../../atoms/label/Label";
import SelectBox from "../../atoms/selectbox/SelectBox";

interface SelectBoxLabelProps {
  id: string | undefined;
  options: SelectBoxOptionsData[];
  name: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  className: string | undefined;
  labelTag: string;
}

const SelectBoxLabel: FC<SelectBoxLabelProps> = (props) => {
  return (
    <Flexbox className={""}>
      <Label htmlFor={props.id} className={props.className}>
        {props.labelTag}
      </Label>
      <SelectBox
        id={props.id}
        options={props.options}
        name={props.name}
        className={props.className}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
    </Flexbox>
  );
};

export default SelectBoxLabel;
