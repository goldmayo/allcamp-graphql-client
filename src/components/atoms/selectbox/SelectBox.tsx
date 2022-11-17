import React, { FC, forwardRef } from "react";
import { SelectBoxOptionsData } from "@/types/selectBoxData";

interface SelectBox {
  ref?: React.Ref<HTMLSelectElement> | null;
  id: string | undefined;
  options: SelectBoxOptionsData[];
  name: string;
  className: string | undefined;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SelectBox: FC<SelectBox> = forwardRef((props, ref) => {
  return (
    <select
      id={props.id}
      ref={ref}
      name={props.name}
      className={`${props.className} w-full p-2 rounded-md focus:outline-none text-monoscale-1`}
      onChange={props.onChange}
    >
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
});

SelectBox.displayName = "SelectBox";

export default SelectBox;
