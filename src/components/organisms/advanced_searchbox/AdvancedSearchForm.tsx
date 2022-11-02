import React, { FC } from "react";
import { AdvancedSearchFormInterface, Category } from "../../../types/searchFormType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Tab from "../tab/Tab";
import CategoryDisplayContainer from "../category_display/CategoryDisplayContainer";
import ButtonGroup from "../button_group/ButtonGroup";
import { AdvancedSearchParamsContextProvider } from "../../../context/AdvancedSearchParamsContext";

interface AdvancedSearchFormProps {
  params: AdvancedSearchFormInterface;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// 여기 다 만들고 쪼개기
const AdvancedSearchForm: FC<AdvancedSearchFormProps> = (props) => {
  const category = Object.values(props.params).map((el) => {
    return [el.name, el.title];
  });
  const categoryList: Category = Object.fromEntries(category);

  return (
    <AdvancedSearchParamsContextProvider>
      <FlexBox className="w-full">
        <Tab className="w-3/5" params={props.params} />
        <FlexBox className="flex-col w-2/5">
          <CategoryDisplayContainer category={categoryList} />
          <ButtonGroup className={"justify-center mt-4"} />
        </FlexBox>
      </FlexBox>
    </AdvancedSearchParamsContextProvider>
  );
};

export default AdvancedSearchForm;
