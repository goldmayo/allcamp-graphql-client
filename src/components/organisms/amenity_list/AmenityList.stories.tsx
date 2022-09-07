import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampInfoEdge } from "../../../types/campType";
import AmenityList from "./AmenityList";

export default {
  title: "organisms/AmenityList",
  Component: AmenityList,
  argTypes: {},
} as ComponentMeta<typeof AmenityList>;

const Template: ComponentStory<typeof AmenityList> = (args) => {
  return <AmenityList {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  sbrsCl: "전기,무선인터넷,장작판매,온수,물놀이장",
};
