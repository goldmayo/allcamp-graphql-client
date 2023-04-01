import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardImage from "./CampCardImage";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/image",
  Component: CampCardImage,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardImage>;

const Template: ComponentStory<typeof CampCardImage> = (args) => {
  return <CampCardImage {...args} />;
};

export const AboutCampImage = Template.bind({});
AboutCampImage.args = {
  className: "flex flex-row items-center mb-1",
};
