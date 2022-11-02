import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";

export default {
  title: "organisms/ButtonGroup",
  Component: ButtonGroup,
  argTypes: {
    onChange: { action: "button" },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => {
  return <ButtonGroup {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
