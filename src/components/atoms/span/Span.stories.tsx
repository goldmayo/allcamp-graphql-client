import { ComponentMeta, ComponentStory } from "@storybook/react";
import Span from "./Span";

export default {
  title: "Atoms/Span",
  Component: Span,
} as ComponentMeta<typeof Span>;

const Template: ComponentStory<typeof Span> = (args) => <Span {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "sample text for span",
  className: "text-black font-medium border border-solid border-black text-center px-1 py-.5",
};
