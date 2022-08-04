import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "./Button";
import styles from "./Button.module.css";

export default {
  title: "Atom/Button",
  Component: Button,
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    onClick: { action: "button clicked" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  content: "button",
  className: "bg-slate-500 text-white font-medium rounded-lg",
};

export const primary = Template.bind({});
primary.args = {
  content: "button",
  className:
    "bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75",
};

export const secondary = Template.bind({});
secondary.args = {
  content: "button",
  className:
    "bg-slate-500 text-white font-medium rounded-lg shadow-md hover:bg-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-opacity-75",
};
