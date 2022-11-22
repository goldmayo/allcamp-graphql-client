import { ComponentMeta, ComponentStory } from "@storybook/react";
import ButtonGroup from "@/components/organisms/common/button_group/ButtonGroup";
import { AdvancedSearchParamsContextProvider } from "@/context/AdvancedSearchParamsContext";

export default {
  title: "organisms/common/ButtonGroup",
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
