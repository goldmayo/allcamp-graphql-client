import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "@/components/atoms/label/Label";

export default {
  title: "Atoms/Label",
  Component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "default label",
  className: "text-black font-medium text-center px-1 py-.5",
};
