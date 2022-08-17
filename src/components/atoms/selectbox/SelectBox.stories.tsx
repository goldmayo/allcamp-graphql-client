import { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectBox from "./SelectBox";
import { SelectBoxOptionsData, SelectBoxData } from "../../../types/SelectBoxData";

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

const doNmOptionsData: SelectBoxOptionsData[] = [
  { id: "doName1", value: "서울시" },
  { id: "doName2", value: "부산시" },
  { id: "doName3", value: "대구시" },
  { id: "doName4", value: "인천시" },
  { id: "doName5", value: "광주시" },
  { id: "doName6", value: "대전시" },
  { id: "doName7", value: "울산시" },
  { id: "doName8", value: "세종시" },
  { id: "doName9", value: "경기도" },
  { id: "doName10", value: "강원도" },
  { id: "doName11", value: "충청북도" },
  { id: "doName12", value: "충청남도" },
  { id: "doName13", value: "전라북도" },
  { id: "doName14", value: "전라남도" },
  { id: "doName15", value: "경상북도" },
  { id: "doName16", value: "경상남도" },
  { id: "doName17", value: "제주도" },
];

const doSelectData: SelectBoxData = {
  id: "doNm",
  options: doNmOptionsData,
  labelText: "지역",
  name: "시도",
};

const ddd = doSelectData;

const Template: ComponentStory<typeof SelectBox> = (args) => <SelectBox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: data.id,
  options: data.options,
  name: data.name,
  placeholder: "전체",
  className: "text-base border align-middle",
};

export const doNm = Template.bind({});
doNm.args = {
  id: ddd.id,
  options: ddd.options,
  name: ddd.name,
  placeholder: "전체",
  className: "text-base border align-middle",
};
