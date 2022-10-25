import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DetailedSearchContextProvider } from "../../../context/DetailedSearchContext";
import { AdvancedSearchParams } from "../../../core/formdata/SearchFormDetailData";
import Tab from "./Tab";

export default {
  title: "organisms/Tab",
  Component: Tab,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof Tab>;

const Template: ComponentStory<typeof Tab> = (args) => {
  return (
    <DetailedSearchContextProvider>
      <Tab {...args} />;
    </DetailedSearchContextProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  params: AdvancedSearchParams,
};
