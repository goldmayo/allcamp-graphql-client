import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdvancedSearchParams } from "../../../core/formdata/SearchFormDetailData";
import SearchFormDetail from "./SearchFormDetail";

export default {
  title: "organisms/SearchFormDetail",
  Component: SearchFormDetail,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof SearchFormDetail>;

const Template: ComponentStory<typeof SearchFormDetail> = (args) => {
  return <SearchFormDetail {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  params: AdvancedSearchParams,
};
