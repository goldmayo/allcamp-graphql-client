import React, { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import ListItem from "../../atoms/list_item/ListItem";
import { useDetailedSearchState } from "../../../hooks/useDetailSearch/useDetailedSearch";

interface CategoryCheckBoxProps {
  option: { id: string; name: string; value: string }[];
  id: string;
  title: string;
  name: string;
  className: string;
  warningMsg?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CategoryCheckBox: FC<CategoryCheckBoxProps> = (props) => {
  const seletedOptions = useDetailedSearchState();
  const checkedOptions = seletedOptions[props.name];

  return (
    <FlexBox className="px-4 py-2 ">
      <ul className="flex flex-wrap text-headline3">
        {props.option.map((item) => (
          <ListItem key={item.id} className={"flex flex-row w-6/12"}>
            <CheckBoxLabel
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={props.onChange}
              className={"mx-1"}
              checked={checkedOptions.includes(item.value) ? true : false}
            />
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
  );
};

export default CategoryCheckBox;
