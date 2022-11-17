import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdvancedSearchFormParams } from "@/core/formdata/AdvancedSearchFormData";
import { AdvancedSearchParamsContextProvider } from "@/context/AdvancedSearchParamsContext";
import Tab from "@/components/organisms/common/tab/Tab";

export default {
  title: "organisms/Tab",
  Component: Tab,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return (
    <AdvancedSearchParamsContextProvider>
      <Tab {...args} />;
    </AdvancedSearchParamsContextProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  params: AdvancedSearchFormParams,
};
