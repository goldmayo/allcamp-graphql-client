import { ComponentMeta, ComponentStory } from "@storybook/react";
import CampCardName from "./CampCardName";
import CampCardDetorator from "../../context/CampCardContextDecorator";

export default {
  title: "organisms/common/campcard/name",
  Component: CampCardName,
  decorators: [CampCardDetorator],
} as ComponentMeta<typeof CampCardName>;

const Template: ComponentStory<typeof CampCardName> = (args) => {
  return <CampCardName {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  className: "flex flex-row items-center mb-1",
};
export const withAnchor = Template.bind({});
withAnchor.args = {
  className: "flex flex-row items-center mb-1 text-headline3",
  link: true,
};
