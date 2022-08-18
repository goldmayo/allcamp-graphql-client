import React, { FC } from "react";
import { SelectBoxOptionsData } from "../../../types/selectBoxData";

interface SelectBox {
  id: string | undefined;
  options: SelectBoxOptionsData[];
  name: string;
  className: string | undefined;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: FC<SelectBox> = (props) => {
  return (
    <select id={props.id} name={props.name} className={props.className} onChange={props.onChange}>
      <option value="">{props.placeholder}</option>
      {props.options &&
        props.options.map((option: SelectBoxOptionsData) => {
          return (
            <option key={option.id} value={option.value}>
              {option.value}
            </option>
          );
        })}
    </select>
  );
};

export default SelectBox;
