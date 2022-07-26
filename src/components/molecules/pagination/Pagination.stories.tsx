import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "@/components/molecules/pagination/Pagination";

export default {
  title: "molecules/Pagination",
  Component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  totalCounts: 310,
  pageInfo: {
    hasNextPage: true,
    hasPreviousPage: false,
  },
  limit: 10,
  onLoadMore: () => {},
};
