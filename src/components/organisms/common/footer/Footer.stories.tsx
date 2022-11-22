import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "@/components/organisms/common/footer/Footer";

export default {
  title: "organisms/common/Footer",
  Component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => {
  return <Footer {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
