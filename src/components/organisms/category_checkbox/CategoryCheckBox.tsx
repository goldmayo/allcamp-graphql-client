import React, { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import ListItem from "../../atoms/list_item/ListItem";

interface CategoryCheckBoxProps {
  content: { id: string; name: string }[];
  id: string;
  title: string;
  name: string;
  className: string;
  warningMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryCheckBox: FC<CategoryCheckBoxProps> = (props) => {
  return (
    <ListItem className="flex flex-row items-center justify-center w-full min-w-[480px]">
      <Span className="text-left basis-1/6">{props.title}</Span>
      <FlexBox className="px-4 py-2 basis-5/6 ">
        <ul className="flex flex-row flex-wrap justify-start w-full text-sm">
          {props.content.map((item) => (
            <ListItem key={item.id} className={"mx-2 my-1"}>
              <CheckBoxLabel id={item.id} name={item.name} onChange={props.onChange} className={props.className} />
            </ListItem>
          ))}
          {props.warningMsg && (
            <>
              <br />
              <Span className="">{props.warningMsg}</Span>
            </>
          )}
        </ul>
      </FlexBox>
    </ListItem>
  );
};

export default CategoryCheckBox;
