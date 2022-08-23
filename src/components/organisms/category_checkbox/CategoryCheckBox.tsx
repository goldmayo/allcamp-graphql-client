import React, { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import ListItem from "../../atoms/list_item/ListItem";

interface CategoryCheckBoxProps {
  content: { id: string; name: string }[];
  id: string;
  title: string;
  checked: boolean;
  name: string;
  className: string;
  warningMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryCheckBox: FC<CategoryCheckBoxProps> = ({ checked = false, ...props }) => {
  return (
    <ListItem className="flex flex-col">
      <Span className="">{props.title}</Span>
      <FlexBox className="">
        {props.content.map((item) => (
          <CheckBoxLabel
            key={item.id}
            id={item.id}
            checked={checked}
            name={item.name}
            onChange={props.onChange}
            className={props.className}
          />
        ))}
        {props.warningMsg && (
          <>
            <br />
            <Span className="">{props.warningMsg}</Span>
          </>
        )}
      </FlexBox>
    </ListItem>
  );
};

export default CategoryCheckBox;
