import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampInfoEdge } from "../../../types/campType";
import Header from "./Header";

export default {
  title: "organisms/Header",
  Component: Header,
  argTypes: {},
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  return <Header {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
