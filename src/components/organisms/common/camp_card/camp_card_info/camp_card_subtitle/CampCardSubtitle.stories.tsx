import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardSubtitle from "./CampCardSubtitle";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/subtitle",
  Component: CampCardSubtitle,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardSubtitle>;

const Template: ComponentStory<typeof CampCardSubtitle> = (args) => {
  return <CampCardSubtitle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  subtitle: "고인물 캠퍼분들에게 추천",
};
