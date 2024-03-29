import React, { FC } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";
import CheckBoxLabel from "@/components/molecules/checkbox_label/CheckBoxLabel";
import ListItem from "@/components/atoms/list_item/ListItem";
import { CategoryName } from "@/types/searchFormType";
import useStore from "store/store";

interface CategoryCheckBoxProps {
  option: { id: string; name: string; value: string }[];
  id: string;
  title: string;
  name: CategoryName;
  className: string;
  warningMsg?: string;
}

const CategoryCheckBox: FC<CategoryCheckBoxProps> = (props) => {
  const checkedSearchParams = useStore((state) => state.AdvancedSearchParams[props.name]);
  const { selectSearchParams, deleteSearchParams } = useStore((state) => state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      selectSearchParams(props.name, value);
    } else {
      deleteSearchParams(props.name, value);
    }
  };

  return (
    <FlexBox className="px-4 py-2 ">
      <ul className="flex flex-wrap text-headline3">
        {props.option.map((item) => (
          <ListItem key={item.id} className={"flex flex-row w-6/12"}>
            <CheckBoxLabel
              id={item.id}
              name={item.name}
              value={item.value}
              onChange={handleChange}
              className={"mx-1"}
              checked={checkedSearchParams.includes(item.value) ? true : false}
            />
          </ListItem>
        ))}
        {props.warningMsg && (
          <>
            <br />
            <Span className="text-secondary-red">{props.warningMsg}</Span>
          </>
        )}
      </ul>
    </FlexBox>
  );
};

export default CategoryCheckBox;
