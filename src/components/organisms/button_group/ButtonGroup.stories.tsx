import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroup from "./ButtonGroup";
import { AdvancedSearchParamsContextProvider } from "../../../context/AdvancedSearchParamsContext";

export default {
  title: "organisms/ButtonGroup",
  Component: ButtonGroup,
  argTypes: {
    onChange: { action: "button" },
  },
} as ComponentMeta<typeof ButtonGroup>;

const Template: ComponentStory<typeof ButtonGroup> = (args) => {
  return (
    <AdvancedSearchParamsContextProvider>
      <ButtonGroup {...args} />
    </AdvancedSearchParamsContextProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
