import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardRegion from "./CampCardRegion";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/region",
  Component: CampCardRegion,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardRegion>;

const Template: ComponentStory<typeof CampCardRegion> = (args) => {
  return <CampCardRegion {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
};
