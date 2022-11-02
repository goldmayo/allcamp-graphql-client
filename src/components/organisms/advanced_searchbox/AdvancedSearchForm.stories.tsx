import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdvancedSearchFormParams } from "../../../core/formdata/AdvancedSearchFormData";
import AdvancedSearchForm from "./AdvancedSearchForm";

export default {
  title: "organisms/AdvancedSearchForm",
  Component: AdvancedSearchForm,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof AdvancedSearchForm>;

const Template: ComponentStory<typeof AdvancedSearchForm> = (args) => {
  return <AdvancedSearchForm {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  params: AdvancedSearchFormParams,
};
