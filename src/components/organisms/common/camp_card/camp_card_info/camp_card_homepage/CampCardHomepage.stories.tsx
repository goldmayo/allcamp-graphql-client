import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardHomepage from "./CampCardHomepage";
import CampCardDetorator from "../../context/CampCardContextDecorator";
import { HiHome } from "react-icons/hi";
import { ImNewTab } from "react-icons/im";
import { ReactNode } from "react";

export default {
  title: "organisms/common/campcard/homepage",
  Component: CampCardHomepage,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardHomepage>;

const Template: ComponentStory<typeof CampCardHomepage> = (args) => {
  return <CampCardHomepage {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
  icon: <HiHome className="mx-1.5" size={"1rem"} />,
};
