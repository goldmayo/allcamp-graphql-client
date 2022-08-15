import React, { FC } from "react";
import { SelectBoxOptionsData } from "../../../core/formdata/SelectBoxData";

interface SelectBox {
  id: string | undefined;
  options: SelectBoxOptionsData[];
  name: string;
  className: string | undefined;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: FC<SelectBox> = (props) => {
  return (
    <select id={props.id} name={props.name} className={props.className} onChange={props.onChange}>
      {props.options.map((option: SelectBoxOptionsData) => (
        <option key={option.id} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
};

export default SelectBox;
