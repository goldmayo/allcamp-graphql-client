import { ComponentMeta, ComponentStory } from "@storybook/react";
import GridBox from "./GridBox";

export default {
  title: "Atoms/GridBox",
  Component: GridBox,
} as ComponentMeta<typeof GridBox>;

const Template: ComponentStory<typeof GridBox> = (args) => <GridBox {...args} />;

export const Cols = Template.bind({});
Cols.args = {
  children: (
    <>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">1</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">2</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">3</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">4</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">5</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">6</div>
    </>
  ),
  className: "grid-cols-2 grid-flow-row text-white font-medium w-1/2 bg-slate-400 ",
};

export const Row = Template.bind({});
Row.args = {
  children: (
    <>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">1</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">2</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">3</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">4</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">5</div>
      <div className="w-10 h-10 px-4 py-2 m-2 text-center bg-amber-600">6</div>
    </>
  ),
  className: "grid-rows-2 gap-2 grid-flow-col text-white font-medium w-1/2 h-96 bg-slate-400 ",
};
