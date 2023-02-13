import React, { FC } from "react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Tab from "@/components/organisms/common/tab/Tab";
import CategoryDisplayContainer from "@/components/organisms/common/category_display_container/CategoryDisplayContainer";
import ButtonGroup from "@/components/organisms/common/button_group/ButtonGroup";
import Form from "@/components/atoms/form/Form";
import { AdvancedSearchFormParams } from "@/core/formdata/AdvancedSearchFormData";
import { Category } from "@/types/searchFormType";

interface AdvancedSearchFormProps {}

const AdvancedSearchForm: FC<AdvancedSearchFormProps> = (props) => {
  const category = Object.values(AdvancedSearchFormParams).map((el) => {
    return [el.name, el.title];
  });
  const categoryList: Category = Object.fromEntries(category);

  return (
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
  );
};

export default AdvancedSearchForm;
