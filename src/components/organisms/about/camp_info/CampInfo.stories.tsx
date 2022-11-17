import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampInfo from "./CampInfo";

export default {
  title: "organisms/CampInfo",
  Component: CampInfo,
  argTypes: {},
} as ComponentMeta<typeof CampInfo>;

const Template: ComponentStory<typeof CampInfo> = (args) => {
  return <CampInfo {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
