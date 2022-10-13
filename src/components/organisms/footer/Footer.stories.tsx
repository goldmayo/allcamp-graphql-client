import { ComponentMeta, ComponentStory } from "@storybook/react";
import { CampInfoEdge } from "../../../types/campType";
import Footer from "./Footer";

export default {
  title: "organisms/Footer",
  Component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
