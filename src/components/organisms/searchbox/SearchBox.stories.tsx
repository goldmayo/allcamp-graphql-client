import { ComponentMeta, ComponentStory } from "@storybook/react";
import React, { useRef } from "react";
import SearchBox from "./SearchBox";
import { SelectBoxData, SelectBoxOptionsData } from "../../../types/SelectBoxData";

export default {
  title: "organisms/SearchBox",
  Component: SearchBox,
  argTypes: {
    onSubmit: { action: "SearchBox submitted" },
    onChange: { action: "Select changed" },
  },
} as ComponentMeta<typeof SearchBox>;

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

const Template: ComponentStory<typeof SearchBox> = (args) => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const onSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    e.preventDefault();
    args.onSubmit(e);
  };
  return <SearchBox {...args} formRef={formRef} onSubmit={onSubmit} />;
};

export const Default = Template.bind({});
Default.args = { data: doSelectData };
