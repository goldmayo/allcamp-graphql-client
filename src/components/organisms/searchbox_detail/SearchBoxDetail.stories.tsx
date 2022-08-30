import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AdvancedSearchParams } from "../../../core/formdata/SearchBoxDetailData";
import SearchBoxDetail from "./SearchBoxDetail";

export default {
  title: "organisms/SearchBoxDetail",
  Component: SearchBoxDetail,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof SearchBoxDetail>;

const Template: ComponentStory<typeof SearchBoxDetail> = (args) => {
  return <SearchBoxDetail {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  params: AdvancedSearchParams,
};
