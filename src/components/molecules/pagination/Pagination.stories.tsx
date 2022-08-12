import { ComponentMeta, ComponentStory } from "@storybook/react";
import Pagination from "./Pagination";

export default {
  title: "molecules/Pagination",
  Component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  //   children: "sample text for Pagination",
  //   className: "text-black font-medium border border-solid border-black text-center px-1 py-.5",
};
