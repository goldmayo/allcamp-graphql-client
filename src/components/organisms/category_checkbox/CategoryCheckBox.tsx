import React, { FC } from "react";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Span from "../../atoms/span/Span";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import ListItem from "../../atoms/list_item/ListItem";
import { useAdvancedSearchParams } from "../../../context/AdvancedSearchParamsContext";
import { CategoryName } from "../../../types/searchFormType";

interface CategoryCheckBoxProps {
  option: { id: string; name: string; value: string }[];
  id: string;
  title: string;
  name: CategoryName;
  className: string;
  warningMsg?: string;
}

const CategoryCheckBox: FC<CategoryCheckBoxProps> = (props) => {
  const [checkedOptions, dispatch] = useAdvancedSearchParams((store) => store[props.name]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    if (checked) {
      dispatch({
        type: "SELECT",
        name: props.name,
        params: value,
      });
    } else {
      dispatch({
        type: "DELETE",
        name: props.name,
        params: value,
      });
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
              checked={checkedOptions.includes(item.value) ? true : false}
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
