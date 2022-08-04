import { ComponentMeta, ComponentStory } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Atom/Label",
  Component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "Do you like cheese?",
  className: "text-black font-medium text-center px-1 py-.5",
};
