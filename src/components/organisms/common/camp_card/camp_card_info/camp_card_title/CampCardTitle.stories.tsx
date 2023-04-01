import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardtitle from "./CampCardTitle";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/title",
  Component: CampCardtitle,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardtitle>;

const Template: ComponentStory<typeof CampCardtitle> = (args) => {
  return <CampCardtitle {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  title: "일반야영장",
};
