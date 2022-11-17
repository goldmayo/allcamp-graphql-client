import { ComponentMeta, ComponentStory } from "@storybook/react";
import Button from "@/components/atoms//button/Button";

export default {
  title: "Atoms/Button",
  Component: Button,
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
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
  children: "button",
  className: "btn-primary",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "button",
  className: "btn-primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "button",
  className: "",
};
