import { ComponentMeta, ComponentStory } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Atom/Image",
  Component: Image,
  argTypes: {
    onClick: { actions: "onClick" },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

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
