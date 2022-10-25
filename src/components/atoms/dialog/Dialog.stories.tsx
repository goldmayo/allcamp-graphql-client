import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "../button/Button";
import Dialog from "./Dialog";
import { ChangeEvent, UIEvent, useRef } from "react";
import FlexBox from "../flexbox/FlexBox";
import Form from "../form/Form";
import CheckBoxLabel from "../../molecules/checkbox_label/CheckBoxLabel";

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
          name={"일반야영장"}
          onChange={function (e: ChangeEvent<HTMLInputElement>): void {
            throw new Error("Function not implemented.");
          }}
          id={"dialog_default"}
          className={undefined}
        />
      </Form>
    </FlexBox>
  ),
};
