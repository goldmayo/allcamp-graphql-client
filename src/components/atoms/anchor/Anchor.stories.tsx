import { ComponentMeta, ComponentStory } from "@storybook/react";
import Anchor from "@/components/atoms/anchor/Anchor";

export default {
  title: "Atoms/Anchor",
  Component: Anchor,
} as ComponentMeta<typeof Anchor>;

const Template: ComponentStory<typeof Anchor> = (args) => <Anchor {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "/",
  children: "home",
  className: "",
};
