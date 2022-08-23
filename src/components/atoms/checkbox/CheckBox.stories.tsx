import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import CheckBox from "./CheckBox";

export default {
  title: "Atoms/CheckBox",
  Component: CheckBox,
  argTypes: {
    checked: { control: "boolean" },
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof CheckBox>;

const Template: ComponentStory<typeof CheckBox> = (args) => {
  return <CheckBox {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  name: "default",
  id: "default",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
