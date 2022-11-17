import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchTemplate from "./SearchTemplate";

export default {
  title: "templates/SearchTemplate",
  Component: SearchTemplate,
  argTypes: {
    onChange: { action: "checkbox" },
  },
} as ComponentMeta<typeof SearchTemplate>;

const Template: ComponentStory<typeof SearchTemplate> = (args) => {
  return <SearchTemplate {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  // edges: ,
  // totalCounts:,
  // pageInfo:,
  // page: 1,
};
