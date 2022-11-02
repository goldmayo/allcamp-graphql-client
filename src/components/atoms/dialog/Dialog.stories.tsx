import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../button/Button";
import Dialog from "./Dialog";
import { ChangeEvent, UIEvent, useRef } from "react";
import FlexBox from "../flexbox/FlexBox";
import Form from "../form/Form";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";
import SearchFormDetail from "../../organisms/advanced_searchbox/AdvancedSearchForm";
import { AdvancedSearchParams } from "../../../core/formdata/AdvancedSearchFormData";
import Span from "../span/Span";

export default {
  title: "atoms/Dialog",
  Component: Dialog,
  argTypes: {},
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = (args) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <>
      <Button
        size="lg"
        className="btn-primary"
        onClick={() => {
          modalRef.current?.showModal();
        }}
      >
        open modal
      </Button>
      <Dialog ref={modalRef} {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: "테스트",
  children: (
    <FlexBox className="flex flex-col justify-center items-center w-6/12 border h-[500px] border-primary-bordergray">
      <Form
        method={"dialog"}
        className={""}
        onSubmit={function (e: UIEvent<HTMLFormElement, globalThis.UIEvent>): void {
          throw new Error("Function not implemented.");
        }}
      >
        <CheckBoxLabel
          name={"campsite"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          id={"dialog_default"}
          value={"일반야영장"}
          className={undefined}
        />
      </Form>
    </FlexBox>
  ),
};

export const DetailedSearch = Template.bind({});
DetailedSearch.args = {
  title: "상세검색",
  children: (
    <FlexBox className="flex flex-col items-center justify-center p-6 border border-primary-bordergray">
      <Form
        method={"dialog"}
        className={"w-full"}
        onSubmit={function (e: UIEvent<HTMLFormElement, globalThis.UIEvent>): void {
          e.stopPropagation();
        }}
      >
        <SearchFormDetail
          params={AdvancedSearchParams}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
        />
      </Form>
    </FlexBox>
  ),
};
