import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atom/Button",
  Component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    onClick: { action: "button clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  textColor: "text-white",
  bgColor: "bg-slate-500",
  content: "캠핑장검색",
};

export const primary = Template.bind({});
primary.args = {
  content: "캠핑장검색",
  style: "btn-primary",
};

export const secondary = Template.bind({});
secondary.args = {
  content: "button",
  style: "btn-secondary",
};
