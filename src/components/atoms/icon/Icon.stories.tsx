import { ComponentMeta, ComponentStory } from "@storybook/react";
import Icon from "./Icon";

export default {
  title: "Atoms/Icon",
  Component: Icon,
  argTypes: {
    onClick: { actions: "onClick" },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  path: "/vercel.svg",
  width: 50,
  height: 50,
  alt: "test alt description",
  className: "flex w-16 h-8 justify-center border border-solid border-amber-600",
};

export const RoundConner = Template.bind({});
RoundConner.args = {
  path: "/vercel.svg",
  width: 50,
  height: 50,
  alt: "test alt description",
  className: "flex w-12 h-12 p-1 justify-center rounded-full border border-solid border-amber-600",
};
