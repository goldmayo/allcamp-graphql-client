import { ComponentMeta, ComponentStory } from "@storybook/react";
import Flexbox from "./Flexbox";

export default {
  title: "Atoms/Flexbox",
  Component: Flexbox,
} as ComponentMeta<typeof Flexbox>;

const Template: ComponentStory<typeof Flexbox> = (args) => <Flexbox {...args} />;

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
