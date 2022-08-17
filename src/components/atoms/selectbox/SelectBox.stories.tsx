import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectBox from "./SelectBox";
import { SelectBoxOptionsData, SelectBoxData } from "../../../types/selectBoxData";

export default {
  title: "Atoms/SelectBox",
  Component: SelectBox,
  argTypes: {
    onChange: { actions: "onChange" },
  },
} as ComponentMeta<typeof SelectBox>;

const SelectBoxTestOptionsData: SelectBoxOptionsData[] = [
  { id: "option_1", value: "test1" },
  { id: "option_2", value: "test2" },
  { id: "option_3", value: "test3" },
];

const SelectBoxTestData: SelectBoxData = {
  id: "select_box_test",
  options: SelectBoxTestOptionsData,
  labelText: "TEST",
  name: "test",
};

const data = SelectBoxTestData;

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: data.id,
  options: data.options,
  name: data.name,
  placeholder: "전체",
  className: "text-base border align-middle",
};
