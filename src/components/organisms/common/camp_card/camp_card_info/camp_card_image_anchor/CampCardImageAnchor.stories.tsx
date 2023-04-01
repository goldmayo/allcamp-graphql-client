import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardImageAnchor from "./CampCardImageAnchor";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/image_anchor",
  Component: CampCardImageAnchor,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardImageAnchor>;

const Template: ComponentStory<typeof CampCardImageAnchor> = (args) => {
  return <CampCardImageAnchor {...args} />;
};

export const SearchResultImage = Template.bind({});
SearchResultImage.args = {
  className: "flex flex-row items-center mb-1",
  width: 300,
  height: 210,
};

export const CarouselImage = Template.bind({});
CarouselImage.args = {
  className: "flex flex-row items-center mb-1",
  width: 200,
  height: 150,
};
