import React, { FC } from "react";
import { AdvancedSearchFormInterface, CategoryCheckBoxInterface } from "../../../types/searchFormType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import CategoryCheckBox from "../category_checkbox/CategoryCheckBox";

interface SearchBoxDetailProps {
  params: AdvancedSearchFormInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchBoxDetail: FC<SearchBoxDetailProps> = (props) => {
  return (
    <FlexBox className="">
      <ul>
        {Object.values(props.params).map((fields: CategoryCheckBoxInterface) => (
          <CategoryCheckBox
            key={fields.id}
            content={fields.content}
            id={fields.id}
            title={fields.title}
            name={fields.name}
            className={fields.className}
            warningMsg={fields.warningMsg}
            onChange={props.onChange}
          />
        ))}
      </ul>
    </FlexBox>
  );
};

export default SearchBoxDetail;
