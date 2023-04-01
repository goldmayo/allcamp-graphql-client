import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardAmenity from "./CampCardAmenity";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/amenity",
  Component: CampCardAmenity,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardAmenity>;

const Template: ComponentStory<typeof CampCardAmenity> = (args) => {
  return <CampCardAmenity {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  gap: "mr-4",
};
