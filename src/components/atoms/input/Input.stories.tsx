import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Atom/Input",
  Component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  type: "email",
  placeholder: "email",
  className: "text-black font-medium  px-1.5 py-0.5 border border-black",
  required: true,
};
