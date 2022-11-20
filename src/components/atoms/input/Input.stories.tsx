import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState, useRef } from "react";
import Input from "@/components/atoms/input/Input";

export default {
  title: "Atoms/Input",
  Component: Input,
  argTypes: {
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => {
  const TestRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input
        {...args}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          args.onChange && args.onChange(e);
        }}
        ref={TestRef}
      />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  type: "email",
  placeholder: "example@company.com",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
