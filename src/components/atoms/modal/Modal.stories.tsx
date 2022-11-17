import { ChangeEvent, UIEvent, useRef } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/atoms/button/Button";
import Modal from "@/components/atoms/modal/Modal";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Form from "@/components/atoms/form/Form";
import CheckBoxLabel from "@/components/molecules/checkbox_label/CheckBoxLabel";
import AdvancedSearchForm from "@/components/organisms/common/advanced_searchbox/AdvancedSearchForm";

export default {
  title: "atoms/Modal",
  Component: Modal,
  argTypes: {},
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => {
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
      <Modal ref={modalRef} {...args} />
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
          id={"Modal_default"}
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
        <AdvancedSearchForm />
      </Form>
    </FlexBox>
  ),
};
