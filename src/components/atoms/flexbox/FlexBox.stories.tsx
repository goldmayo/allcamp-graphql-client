import { ComponentMeta, ComponentStory } from "@storybook/react";
import FlexBox from "@/components/atoms/flexbox/FlexBox";

export default {
  title: "Atoms/FlexBox",
  Component: FlexBox,
} as ComponentMeta<typeof FlexBox>;

const Template: ComponentStory<typeof FlexBox> = (args) => <FlexBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">1</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">2</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">3</div>
    </>
  ),
  className: "flex-row text-white font-medium w-96 bg-slate-400 justify-between",
};

export const Column = Template.bind({});
Column.args = {
  children: (
    <>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">1</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">2</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">3</div>
    </>
  ),
  className: "flex-col text-white font-medium w-14 h-96 bg-slate-400 justify-between",
};
