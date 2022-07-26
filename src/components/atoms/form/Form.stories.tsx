import React, { useRef } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import Form from "@/components/atoms/form/Form";
import Input from "@/components/atoms/input/Input";
import Label from "@/components/atoms/label/Label";
import Button from "@/components/atoms/button/Button";

export default {
  title: "Atoms/Form",
  Component: Form,
  argTypes: {
    onSubmit: { action: "form submitted" },
  },
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit = (e: React.UIEvent<HTMLFormElement>) => {
    e.preventDefault();
    args.onSubmit(e);
  };
  return <Form {...args} formRef={formRef} onSubmit={onSubmit} />;
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <Label htmlFor="test" className="px-1 py-0.5 font-medium text-center text-black">
        label
      </Label>
      <Input
        name={"test"}
        type={"text"}
        placeholder={"text"}
        id={"text"}
        className="m-2 text-black font-medium  px-1.5 py-0.5 border border-black"
        required={false}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {}}
        pattern={"^[a-zA-z]{0,10}"}
      />
      <Button
        type="submit"
        disabled={false}
        className="font-medium text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        size="xs"
      >
        submit
      </Button>
    </>
  ),
  className: "text-black font-medium  px-1.5 py-0.5",
};
