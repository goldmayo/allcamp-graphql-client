import React, { FC } from "react";
import { AdvancedSearchFormInterface, Category } from "../../../types/searchFormType";
import FlexBox from "../../atoms/flexbox/FlexBox";
import Tab from "../tab/Tab";
import CategoryDisplayContainer from "../category_display_container/CategoryDisplayContainer";
import ButtonGroup from "../button_group/ButtonGroup";
import { AdvancedSearchParamsContextProvider } from "../../../context/AdvancedSearchParamsContext";
import Form from "../../atoms/form/Form";
import { AdvancedSearchFormParams } from "../../../core/formdata/AdvancedSearchFormData";

interface AdvancedSearchFormProps {}

const AdvancedSearchForm: FC<AdvancedSearchFormProps> = (props) => {
  const category = Object.values(AdvancedSearchFormParams).map((el) => {
    return [el.name, el.title];
  });
  const categoryList: Category = Object.fromEntries(category);

  return (
    <AdvancedSearchParamsContextProvider>
      <Form
        method={"dialog"}
        className={"flex w-full"}
        onSubmit={function (e: React.UIEvent<HTMLFormElement>) {
          e.stopPropagation();
        }}
      >
        <Tab className="w-3/5" params={AdvancedSearchFormParams} />
        <FlexBox className="flex-col w-2/5">
          <CategoryDisplayContainer category={categoryList} />
          <ButtonGroup className={"justify-center mt-4"} />
        </FlexBox>
      </Form>
    </AdvancedSearchParamsContextProvider>
  );
};

export default AdvancedSearchForm;
