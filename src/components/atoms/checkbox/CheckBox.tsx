import React, { FC } from "react";

interface CheckBoxProps {
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  id: string | undefined;
  className: string | undefined;
  required: boolean;
}

const CheckBox: FC<CheckBoxProps> = ({ name, onChange, id, className, required }) => {
  return <input className={className} name={name} type={"checkbox"} onChange={onChange} id={id} required={required} />;
};

export default CheckBox;
