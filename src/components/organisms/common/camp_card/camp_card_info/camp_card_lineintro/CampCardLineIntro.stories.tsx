import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardLineIntro from "./CampCardLineIntro";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/line_intro",
  Component: CampCardLineIntro,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardLineIntro>;

const Template: ComponentStory<typeof CampCardLineIntro> = (args) => {
  return <CampCardLineIntro {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
};
