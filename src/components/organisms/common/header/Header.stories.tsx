import { ComponentMeta, ComponentStory } from "@storybook/react";
import Header from "@/components/organisms/common/header/Header";

export default {
  title: "organisms/common/Header",
  Component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
